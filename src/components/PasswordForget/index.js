import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';

const PasswordForgetPage = () => (
  <Main>
    <header>
      <h1>PasswordForget</h1>
    </header>
    <PasswordForgetForm />
  </Main>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
    <Section>  
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </Section>  
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

const Main = styled.main`
  width: 100vw;
  text-align: center;
  background-color: var(--bodybgcolor);
  header {
    padding: 1rem;
    h1 {
      color: var(--mainfontscolor);
    }
  }
`;

const Section = styled.section`
  background-color: var(--bodybgcolor);
  padding: 6rem 0.2rem;
  form {
    padding: 4rem 0.6rem;
    background: var(--bodybgcolor);
    border: 2px solid var(--mainfontscolor);
    display: flex;
    align-items: center;
    justify-content: space-around;
     input, button {
      background: var(--mainlink);
      border: 2px solid var(--mainfontscolor);
      color: var(--lightblue);
      font-size: 1.2rem;
      padding: 1rem;
      &:hover {
        transition: all 1s ease-in-out;
        background-color: var(--mainheadercolor);
        border: 2px solid var(--mainfontscolor);
      }
    }
  }
`;

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };