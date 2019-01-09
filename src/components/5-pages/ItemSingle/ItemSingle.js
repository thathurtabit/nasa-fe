import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemSingleStyled from './ItemSingle.styled';
import Loading from '../../1-atoms/Loading/Loading';
import { fetchData } from '../../../state/actions/fetchData';
import { hasKey } from '../../../utils/helpers/hasKey';

const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));

const mapStateToProps = state => ({
  items: state.response,
  searchValue: state.searchValue,
  fetching: state.fetching,
  fetchError: state.fetching,
  response: state.response,
});

const mapDispatchToProps = dispatch => ({
  fetchData: searchStr => dispatch(fetchData(searchStr)),
});

export class ItemSingle extends Component {
  state = {};

  componentDidMount() {
    const { items, fetchData, location } = this.props;
    const itemId = location
      .split('/')
      .filter(loc => loc)
      .pop();

    this.hasMounted = true;

    // If we don't have any data yet (i.e. a direct link), go fetch data, else filter it and setState
    if (!items.length) {
      fetchData(itemId);
    } else {
      this.setState({
        item: items.filter(res => res.data[0].nasa_id === itemId)[0],
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { items } = this.props;
    console.log('compDidUpdate: ', prevProps.items, items);

    if (prevProps.items[0] !== items[0]) {
      this.setState({ item: items[0] });
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  render() {
    const { fetchError, fetching } = this.props;
    const { item } = this.state;

    return (
      <ItemSingleStyled>
        {fetching && <Loading isLoading />}
        <Suspense fallback={<Loading isLoading />}>
          {fetchError ? (
            <NoItems text="No items found." />
          ) : (
            <div>
              <h1>{hasKey(item, 'title') ? item.title : 'No Title'}</h1>
              <img
                src={hasKey(item, 'imgSrc') ? item.imgSrc : '#'}
                alt="Yeah"
              />
            </div>
          )}
        </Suspense>
      </ItemSingleStyled>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemSingle);

ItemSingle.propTypes = {
  location: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
  fetchError: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  searchValue: PropTypes.string,
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
  searchValue: '',
};
