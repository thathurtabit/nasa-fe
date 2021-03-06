import React from 'react';
import PropTypes from 'prop-types';
import SearchIconStyled from './SearchIcon.styled';

const SearchIcon = props => {
  const { width, height, title } = props;
  return (
    <SearchIconStyled
      width={width}
      height={height}
      {...props}
      viewBox="0 0 25 25"
    >
      <title>{title}</title>
      <path d="M23.822 20.88l-6.353-6.354a9.407 9.407 0 0 0 1.467-5.059C18.937 4.248 14.689 0 9.468 0S0 4.248 0 9.468c0 5.221 4.247 9.469 9.468 9.469a9.41 9.41 0 0 0 4.839-1.333L20.703 24l3.119-3.12zM3.528 9.468A5.947 5.947 0 0 1 9.467 3.53a5.946 5.946 0 0 1 5.94 5.938 5.946 5.946 0 0 1-5.94 5.939 5.946 5.946 0 0 1-5.939-5.939z" />
    </SearchIconStyled>
  );
};

export default SearchIcon;

SearchIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
