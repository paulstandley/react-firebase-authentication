import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <Nav>
    <ul>
      <Li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </Li>
      <Li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </Li>
      <Li>
        <Link to={ROUTES.HOME}>Home</Link>
      </Li>
      <Li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </Li>
      <Li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </Li>
    </ul>
  </Nav>
);

const Nav = styled.nav`
  padding: 1rem 0.8rem;
  text-align: center;
  color: var(--mainfontscolor);
  background-color: var(--mainheadercolor);
  ul {
    list-style-type: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Li = styled.li`
  background: transparent;
  border-radius: 9px;
  border: 2px solid var(--mainfontscolor);
  color: var(--mainfontscolor);
  padding: 0.5rem 4rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    background-color: var(--mainLink);
    color: var(--mainvapbgcolor);
    border: 2px solid var(--bodybgcolor);
  }
  &:focus {
    outline: none;
  }
  ${props => 
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

export default Navigation;