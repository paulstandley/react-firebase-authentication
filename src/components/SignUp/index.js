import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import  { FirebaseContext } from '../Firebase';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components';

const SignUpPage = () => (
  <Main>
    <header>
      <h1>SignUp</h1>
    </header>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </Main>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';
    return (
    <Section>
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </Section>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

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

export default SignUpPage;
export { SignUpForm, SignUpLink };