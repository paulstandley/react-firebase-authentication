import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <Section>
        <form onSubmit={this.onSubmit}>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="New Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm New Password"
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

export default withFirebase(PasswordChangeForm);