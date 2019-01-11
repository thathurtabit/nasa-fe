import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchInfoStyled, { Quote, Span } from './SearchInfo.styled';

const mapStateToProps = state => ({
  searchValue: state.searchValue,
  total: state.itemCount,
});

const SearchInfo = ({ searchValue, total }) => {
  const { search, type } = searchValue;
  const content = () => {
    if (search.length) {
      return (
        <SearchInfoStyled>
          <Quote>{search}</Quote> has <Span>{total}</Span> {type} result
          {total !== 1 && 's'}
        </SearchInfoStyled>
      );
    }
    return (
      <SearchInfoStyled>
        Showing <Span>{total}</Span> results
      </SearchInfoStyled>
    );
  };
  return content();
};

export default connect(mapStateToProps)(SearchInfo);

SearchInfo.propTypes = {
  total: PropTypes.number,
  searchValue: PropTypes.objectOf(PropTypes.string),
};

SearchInfo.defaultProps = {
  searchValue: null,
  total: 0,
};
