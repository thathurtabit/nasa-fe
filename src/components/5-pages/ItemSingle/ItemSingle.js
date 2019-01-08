import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemSingleStyled from './ItemSingle.styled';
import Loading from '../../1-atoms/Loading/Loading';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';

const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const Item = lazy(() => import('../../3-organisms/Item/Item'));

const mapStateToProps = state => ({
  api: state.api,
  items: state.response,
});

export class ItemSingle extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, error: false };
  }

  componentDidMount() {
    this.hasMounted = true;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    const { api, items } = this.props;

    if (!items.length && this.hasMounted) {
      fetch(api, { credentials: 'same-origin', method: 'GET' })
        .then(response => response.json())
        .then(data => this.handleFetchData(data.collection.items))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleFetchData(data) {
    const { location, items } = this.props;
    const itemId = location
      .split('/')
      .filter(loc => loc)
      .pop();

    if (this.hasMounted && !items.length) {
      // Filter out single Item
      const item = data.filter(prod => prod.data.nase_id === itemId)[0] || null;
      // Keep what we need
      const single = {
        title: item.data.title || NoTitle,
        desc: item.data.description || NoDesc,
        imgSrc: item.links.href,
        itemID: item.data.nasa_id,
        link: '/asset',
      };

      this.setState({ single, isLoading: false });
    }
  }

  handleFetchError(error) {
    this.setState({ error: true, isLoading: false });
    console.warn(error);
  }

  render() {
    const { isLoading, single, error } = this.state;

    return (
      <ItemSingleStyled>
        {isLoading && <Loading isLoading />}
        <Suspense fallback={<Loading isLoading={isLoading} />}>
          {error ? (
            <NoItems text="No items found." />
          ) : (
            !isLoading && single !== null && <Item item={single} />
          )}
        </Suspense>
      </ItemSingleStyled>
    );
  }
}

export default connect(mapStateToProps)(ItemSingle);

ItemSingle.propTypes = {
  location: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
};

ItemSingle.defaultProps = {
  items: [],
};
