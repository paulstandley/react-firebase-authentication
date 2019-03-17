import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';
import styled from 'styled-components';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Main>
        <header>
          <h1>Account: {authUser.email}</h1>
        </header>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </Main>
    )}
  </AuthUserContext.Consumer>
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

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage)