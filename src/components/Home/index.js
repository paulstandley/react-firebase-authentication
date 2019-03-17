import React from 'react';
import { withAuthorization } from '../Session';
import styled from 'styled-components';

const HomePage = () => (
  <Main>
    <header>
      <h1>Home Page</h1>
    </header>
    <p>The Home Page is accessible by every signed in user</p>
  </Main>
);

const condition = authUser => !!authUser;

const Main = styled.main`
  width: 100vw;
  text-align: center;
  background-color: var(--bodybgcolor);
  header {
    padding: 1rem;
    h1 {
      color: var(--mainfontscolor);
    }
    p {
      color: var(--mainfontscolor);
    }
  }
`;

export default withAuthorization(condition)(HomePage)