import React, { Component, Fragment, Suspense, lazy } from 'react';
import 'whatwg-fetch';
// import memoize from 'memoize-one';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../1-atoms/Loading/Loading';
import { storeResponse } from '../../../state/actions/storeResponse';
import { setItemCount } from '../../../state/actions/setItemCount';
import { NoTitle, NoDesc, NoURL } from '../../../utils/constants/constants';
import SearchBar from '../../2-molecules/SearchBar/SearchBar';
import IntroBar from '../../2-molecules/IntroBar/IntroBar';
import { hasKey } from '../../../utils/helpers/hasKey';

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

    // Bind methods to class
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);
  }

  componentDidMount() {
    this.hasMounted = true;
  }

  componentDidUpdate(prevProps) {
    const { api, searchValue } = this.props;

    console.log('search: ', searchValue, 'prev: ', prevProps.searchValue);

    if (prevProps.searchValue !== searchValue) {
      fetch(`${api}/search?q=${searchValue}`)
        .then(data => data.json())
        .then(data => this.handleFetchData(data))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleFetchData(data) {
    const { storeResponse } = this.props;

    // Filter out Video
    const response = data.collection.items.filter(
      item => item.data[0].media_type !== 'video'
    );

    // Check for required values, and keep only what we need
    const responseSelection = response.map(item => ({
      title: hasKey(item, `data[0].title`) ? item.data[0].title : NoTitle,
      desc: hasKey(item, `data[0].description`)
        ? item.data[0].description
        : NoDesc,
      imgSrc: hasKey(item, `links[0].href`) ? item.links[0].href : NoURL,
      itemID: hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : null,
      link: '/asset',
    }));

    // set response to Redux state
    storeResponse(responseSelection);
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
          <SearchBar />
          {hasError ? (
            <Error error="It's not you, it's us." />
          ) : items.length ? (
            <Fragment>
              <IntroBar />
              <ItemList items={items} />
            </Fragment>
          ) : (
            <NoItems text="Assets will apear here" />
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
