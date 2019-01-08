import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
import memoize from 'memoize-one';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../1-atoms/Loading/Loading';
import { storeResponse } from '../../../state/actions/storeResponse';
import { setProductCount } from '../../../state/actions/setProductCount';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';
import SearchBar from '../../2-molecules/SearchBar/SearchBar';
import { upperCaseIncludes } from '../../../utils/helpers/upperCaseIncludes';
import IntroBar from '../../2-molecules/IntroBar/IntroBar';

// Lazy load components
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const CardList = lazy(() => import('../../3-organisms/CardList/CardList'));

const mapStateToProps = state => ({
  products: state.response,
  api: state.api,
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  storeResponse: arr => dispatch(storeResponse(arr)),
  setProductCount: int => dispatch(setProductCount(int)),
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.hasMounted = false;
    this.memoizedFilter = this.memoizedFilter.bind(this);

    // Init state
    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    this.hasMounted = true;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    const { api, products } = this.props;

    if (!products.length && this.hasMounted) {
      fetch(`${api}/search?q=moon`, {
        credentials: 'same-origin',
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => this.handleFetchData(data.collection.items))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  memoizedFilter = memoize((products, searchValue) =>
    products.filter(item => upperCaseIncludes(item.title, searchValue))
  );

  handleFetchData(data) {
    const { storeResponse, products, searchValue } = this.props;

    if (this.hasMounted && !products.length) {
      // Keep only what we need
      const responseSelection = data.map(item => ({
        title: item.data.title || NoTitle,
        desc: item.data.description || NoDesc,
        imgSrc: item.links.href,
        link: '/asset',
      }));
      // Filter by search term
      const filteredSelection = responseSelection.filter(item =>
        upperCaseIncludes(item.title, searchValue)
      );

      // set response to Redux state
      storeResponse(searchValue.length ? filteredSelection : responseSelection);
    }
  }

  handleFetchError(error) {
    this.setState({ hasError: true });
    console.warn(error);
  }

  render() {
    const { hasError } = this.state;
    const { products, searchValue, setProductCount } = this.props;
    const filteredProducts = this.memoizedFilter(products, searchValue);
    // Count current items
    setProductCount(filteredProducts.length);

    return (
      <Fragment>
        <Suspense fallback={<Loading isLoading />}>
          {hasError ? (
            <Error error="It's not you, it's us." />
          ) : products !== null && products.length ? (
            <Fragment>
              <SearchBar />
              <IntroBar />
              <CardList products={filteredProducts} />
            </Fragment>
          ) : (
            <NoItems text="No items to view." />
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
  api: PropTypes.string.isRequired,
  searchValue: PropTypes.string,
  storeResponse: PropTypes.func.isRequired,
  setProductCount: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
};

Home.defaultProps = {
  searchValue: null,
};
