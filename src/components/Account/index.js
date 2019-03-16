import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import styled from 'styled-components';

const AccountPage = () => (
  <Main>
    <header>
      <h1>Account Page</h1>
    </header>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </Main>
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

export default AccountPage;