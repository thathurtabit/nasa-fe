import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../1-atoms/Loading/Loading';
import SearchBar from '../../2-molecules/SearchBar/SearchBar';
import IntroBar from '../../2-molecules/IntroBar/IntroBar';
import { fetchSearchData } from '../../../state/actions/fetchSearchData';

// Lazy load components
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const ItemList = lazy(() => import('../../3-organisms/ItemList/ItemList'));

const mapStateToProps = state => ({
  items: state.response,
  searchValue: state.searchValue,
  fetching: state.fetching,
  fetchError: state.fetching,
  response: state.response,
});

const mapDispatchToProps = dispatch => ({
  fetchSearchData: searchStr => dispatch(fetchSearchData(searchStr)),
});

class Home extends Component {
  componentDidMount() {
    this.hasMounted = true;
  }

  componentDidUpdate(prevProps) {
    const { fetchSearchData, searchValue } = this.props;

    if (prevProps.searchValue !== searchValue && this.hasMounted) {
      fetchSearchData(searchValue);
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  render() {
    const { items, fetchError, fetching, searchValue } = this.props;
    const { search } = searchValue;

    return (
      <Fragment>
        <Loading isLoading={fetching} />
        <Suspense fallback={<Loading isLoading />}>
          <SearchBar />
          {search.length > 0 && <IntroBar />}
          {fetchError.length ? (
            <Error error="It's not you, it's us." />
          ) : items.length ? (
            <ItemList items={items} />
          ) : (
            !fetching && <NoItems text="Assets will apear here" />
          )}
        </Suspense>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  fetchSearchData: PropTypes.func.isRequired,
  fetchError: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  searchValue: PropTypes.objectOf(PropTypes.string),
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
};

Home.defaultProps = {
  searchValue: null,
};
