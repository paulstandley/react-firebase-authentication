import React from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

const Button = styled.button`
  color: var(--mainfontscolor);
  font-weight: bold;
  font-size: 0.88rem;
  background-color: var(--mainheadercolor);
  transition: all 1s ease-in-out;
  &:hover {
    color: red;
    background: white;
  }
`;

export default withFirebase(SignOutButton);