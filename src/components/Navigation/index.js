import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <Nav>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </Nav>
);
const NavigationAuth = () => (
  <ul>
    <Li>
      <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
    </Li>
    <Li>
      <StyledLink to={ROUTES.HOME}>Home</StyledLink>
    </Li>
    <Li>
      <StyledLink to={ROUTES.ACCOUNT}>Account</StyledLink>
    </Li>
    <Li>
      <SignOutButton />
    </Li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <Li>
      <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
    </Li>
    <Li>
      <StyledLink to={ROUTES.SIGN_IN}>Sign In</StyledLink>
    </Li>
  </ul>
);

const StyledLink = styled(Link)`
  color: var(--mainfontscolor);
  font-weight: bold;
  transition: all 1s ease-in-out;
  &:hover {
    color: red;
  }  
`;

const Nav = styled.nav`
  padding: 1rem 0.8rem;
  text-align: center;
  color: var(--mainfontscolor);
  background-color: var(--mainheadercolor);
  ul {
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
    border: 2px solid var(--bodybgcolor);
  }
`

export default Navigation;