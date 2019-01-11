import React, { Component, Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemSingleStyled, {
  Title,
  Description,
  MediaWrap,
} from './ItemSingle.styled';
import Loading from '../../1-atoms/Loading/Loading';
import { fetchSearchData } from '../../../state/actions/fetchSearchData';
import { fetchAssetData } from '../../../state/actions/fetchAssetData';
import { setSearch } from '../../../state/actions/setSearch';
import { ReturnText, mediaType } from '../../../utils/constants/constants';
import ItemImage from '../../1-atoms/ItemImage/ItemImage';
import Return from '../../1-atoms/Return/Return';

const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));

const mapStateToProps = state => ({
  items: state.response,
  assets: state.assets,
  fetching: state.fetching,
  fetchError: state.fetching,
  response: state.response,
});

const mapDispatchToProps = dispatch => ({
  fetchSearchData: searchStr => dispatch(fetchSearchData(searchStr)),
  fetchAssetData: itemID => dispatch(fetchAssetData(itemID)),
  setSearch: searchObj => dispatch(setSearch(searchObj)),
});

export class ItemSingle extends Component {
  state = {
    item: {
      title: 'No results found',
      desc: `It's not you, it's us.`,
      href: '',
      json: '',
      type: '',
      itemID: '',
    },
    assets: {
      videoURL: '',
      subtitle: '',
      audioURL: '',
    },
  };

  componentDidMount() {
    const {
      items,
      fetchSearchData,
      fetchAssetData,
      setSearch,
      location,
    } = this.props;
    const itemId = location
      .split('/')
      .filter(loc => loc)
      .pop();

    this.hasMounted = true;

    // Fetch media asset data
    fetchAssetData(itemId);

    // If we don't have any data yet (i.e. a direct link), go fetch data, else filter it and setState
    if (!items.length) {
      setSearch({ search: '', type: '' });
      fetchSearchData({ search: itemId, type: '' });
    } else {
      this.setState({
        item: items.filter(res => res.data[0].nasa_id === itemId)[0], // filter by nasa_id
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { items, assets } = this.props;

    if (prevProps.items[0] !== items[0] || prevProps.assets[0] !== assets[0]) {
      this.setState({ item: items[0], assets });
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  render() {
    const { fetchError, fetching } = this.props;
    const { item, assets } = this.state;
    const { title, desc, href, type } = item;
    const { videoURL, audioURL } = assets;

    return (
      <ItemSingleStyled>
        {fetching && <Loading isLoading />}
        <Suspense fallback={<Loading isLoading />}>
          {fetchError ? (
            <NoItems text="No items found." />
          ) : (
            <Fragment>
              <Title>{title}</Title>
              {type !== mediaType.audio ? (
                <Description>{desc}</Description>
              ) : (
                <Description>Listen to the audio below</Description>
              )}
              <MediaWrap>
                {type === mediaType.image && (
                  <ItemImage title={title} url={href} />
                )}
                {type === mediaType.video && (
                  <video controls src={videoURL} width="100%">
                    {/* <track default kind="subtitles" srcLang="en" src={subtitles} /> */}
                    Sorry, your browser does not support embedded videos.
                  </video>
                )}
                {type === mediaType.audio && (
                  <audio controls src={audioURL} width="100%">
                    {/* <track default kind="subtitles" srcLang="en" src={subtitles} /> */}
                    Sorry, your browser does not support the audio element.
                  </audio>
                )}
              </MediaWrap>
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
  fetchSearchData: PropTypes.func.isRequired,
  fetchAssetData: PropTypes.func.isRequired,
  fetchError: PropTypes.bool.isRequired,
  assets: PropTypes.objectOf(PropTypes.string),
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
  assets: {},
};
