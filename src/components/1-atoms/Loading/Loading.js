import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoaderStyled, { Outer, Inner } from './Loading.styled';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

const Loading = ({ isLoading }) => (
  <LoaderStyled isLoading={isLoading} aria-label="Loading">
    <Outer>
      <Inner />
    </Outer>
  </LoaderStyled>
);

export default connect(mapStateToProps)(Loading);

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};
