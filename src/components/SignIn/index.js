import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';

const SignInPage = () => (
  <Main>
    <header>
      <h1>Sign In</h1>
    </header>
    <SignInForm />
    <SignUpLink />
  </Main>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Section>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </Section>
    );
  }
}

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

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };