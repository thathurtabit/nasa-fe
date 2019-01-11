import React from 'react';
import HeaderStyled, { Link } from './Header.styled';
import Logo from '../../1-atoms/Logo/Logo';

const Header = () => (
  <HeaderStyled role="banner">
    <Link href="/">
      <Logo title="NASA" />
    </Link>
  </HeaderStyled>
);

export default Header;
