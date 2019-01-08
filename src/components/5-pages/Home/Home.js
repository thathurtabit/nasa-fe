import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
// import memoize from 'memoize-one';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../1-atoms/Loading/Loading';
import { storeResponse } from '../../../state/actions/storeResponse';
import { setItemCount } from '../../../state/actions/setItemCount';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';
import SearchBar from '../../2-molecules/SearchBar/SearchBar';
import { upperCaseIncludes } from '../../../utils/helpers/upperCaseIncludes';
import IntroBar from '../../2-molecules/IntroBar/IntroBar';

// Lazy load components
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const ItemList = lazy(() => import('../../3-organisms/ItemList/ItemList'));

const mapStateToProps = state => ({
  items: state.response,
  api: state.api,
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  storeResponse: arr => dispatch(storeResponse(arr)),
  setItemCount: int => dispatch(setItemCount(int)),
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.hasMounted = false;

    // Init state
    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    this.hasMounted = true;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    const { api, items } = this.props;

    if (!items.length && this.hasMounted) {
      fetch(`${api}/search?q=earth`)
        .then(data => data.json())
        .then(data => this.handleFetchData(data))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleFetchData(data) {
    const { storeResponse, items, searchValue } = this.props;

    // Filter out Video
    const response = data.collection.items.filter(
      item => item.data[0].media_type !== 'video'
    );

    if (this.hasMounted && !items.length) {
      // Keep only what we need
      const responseSelection = response.map(item => ({
        title: item.data[0].title || NoTitle,
        desc: item.data[0].description || NoDesc,
        imgSrc: item.links[0].href || NoDesc,
        itemID: item.data[0].nasa_id || NoDesc,
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
    const { items, setItemCount } = this.props;
    setItemCount(items.length);

    return (
      <Fragment>
        <Suspense fallback={<Loading isLoading />}>
          {hasError ? (
            <Error error="It's not you, it's us." />
          ) : items.length ? (
            <Fragment>
              <SearchBar />
              <IntroBar />
              <ItemList items={items} />
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
  setItemCount: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
};

Home.defaultProps = {
  searchValue: null,
};
