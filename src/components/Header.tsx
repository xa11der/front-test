import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './styles/Header.styled';

const Header: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/collection" activeClassName="u-active">Collection</NavLink>
        </li>
        <li>
          <NavLink to="/create-card" activeClassName="u-active">Create Card</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Header;

