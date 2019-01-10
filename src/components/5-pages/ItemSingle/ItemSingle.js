import React, { Component, Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemSingleStyled, { Title, Description } from './ItemSingle.styled';
import Loading from '../../1-atoms/Loading/Loading';
import { fetchData } from '../../../state/actions/fetchData';
import { setSearch } from '../../../state/actions/setSearch';
import { hasKey } from '../../../utils/helpers/hasKey';
import {
  NoTitle,
  NoDesc,
  NoURL,
  ReturnText,
} from '../../../utils/constants/constants';
import ItemImage from '../../1-atoms/ItemImage/ItemImage';
import Return from '../../1-atoms/Return/Return';

const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));

const mapStateToProps = state => ({
  items: state.response,
  fetching: state.fetching,
  fetchError: state.fetching,
  response: state.response,
});

const mapDispatchToProps = dispatch => ({
  fetchData: searchStr => dispatch(fetchData(searchStr)),
  setSearch: searchObj => dispatch(setSearch(searchObj)),
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
      setSearch({ search: itemId, type: '' });
      fetchData({ search: itemId, type: '' });
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
    const title = hasKey(item, 'title') ? item.title : NoTitle;
    const desc = hasKey(item, 'desc') ? item.desc : NoDesc;
    const href = hasKey(item, 'href') ? item.href : NoURL;

    return (
      <ItemSingleStyled>
        {fetching && <Loading isLoading />}
        <Suspense fallback={<Loading isLoading />}>
          {fetchError ? (
            <NoItems text="No items found." />
          ) : (
            <Fragment>
              <Title>{title}</Title>
              <Description>{desc}</Description>
              <ItemImage title={title} url={href} />
              <Return text={ReturnText} />
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
