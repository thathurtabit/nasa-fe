import React from 'react';
import IntroBarStyled from './IntroBar.styled';
import SearchInfo from '../../1-atoms/SearchInfo/SearchInfo';

const IntroBar = () => (
  <IntroBarStyled role="navigation">
    <SearchInfo />
  </IntroBarStyled>
);

export default IntroBar;
