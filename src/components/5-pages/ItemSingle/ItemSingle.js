import React, { Component, Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemSingleStyled, { Title, Description } from './ItemSingle.styled';
import Loading from '../../1-atoms/Loading/Loading';
import { fetchData } from '../../../state/actions/fetchData';
import { setSearch } from '../../../state/actions/setSearch';
import { hasKey } from '../../../utils/helpers/hasKey';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';

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
  setSearch: searchStr => dispatch(setSearch(searchStr)),
});

export class ItemSingle extends Component {
  state = {};

  componentDidMount() {
    const { items, fetchData, setSearch, location } = this.props;
    const itemId = location
      .split('/')
      .filter(loc => loc)
      .pop();

    this.hasMounted = true;

    // If we don't have any data yet (i.e. a direct link), go fetch data, else filter it and setState
    if (!items.length) {
      fetchData(itemId);
      setSearch(itemId);
    } else {
      this.setState({
        item: items.filter(res => res.data[0].nasa_id === itemId)[0],
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { items } = this.props;

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
            <Fragment>
              <Title>{hasKey(item, 'title') ? item.title : NoTitle}</Title>
              <Description>
                {hasKey(item, 'desc') ? item.desc : NoDesc}
              </Description>
              <img
                src={hasKey(item, 'imgSrc') ? item.imgSrc : '#'}
                alt="Yeah"
              />
            </Fragment>
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
