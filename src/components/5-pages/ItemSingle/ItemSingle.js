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
import {
  ReturnText,
  mediaType,
  NoAssetTitle,
  NoAssetSubtitle,
} from '../../../utils/constants/constants';
import ItemImage from '../../1-atoms/ItemImage/ItemImage';
import Return from '../../1-atoms/Return/Return';
import { areEqual } from '../../../utils/helpers/areEqual';
import { getItemID } from '../../../utils/helpers/getItemID';

const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));

const mapStateToProps = state => ({
  items: state.response,
  assets: state.assets,
  fetching: state.fetching,
  fetchError: state.fetching,
  response: state.response,
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  fetchSearchData: searchStr => dispatch(fetchSearchData(searchStr)),
  fetchAssetData: itemID => dispatch(fetchAssetData(itemID)),
  setSearch: searchObj => dispatch(setSearch(searchObj)),
});

export class ItemSingle extends Component {
  state = {
    item: {
      title: NoAssetTitle,
      desc: NoAssetSubtitle,
      href: '',
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
    const { fetchSearchData, fetchAssetData, location } = this.props;

    // Get location from props
    const itemID = getItemID(location);

    // Get data on mount, data will be picked up by componentDidUpdate
    fetchSearchData({ search: itemID, type: '' });
    fetchAssetData(itemID);
  }

  componentDidUpdate(prevProps) {
    const { items, assets } = this.props;

    // If props have updated, update State
    if (
      !areEqual(prevProps.items, items) ||
      !areEqual(prevProps.assets, assets)
    ) {
      this.setState({ item: items[0], assets });
    }
  }

  render() {
    const { fetchError, fetching } = this.props;
    const { item, assets } = this.state;

    return (
      <ItemSingleStyled>
        {fetching && <Loading isLoading />}
        <Suspense fallback={<Loading isLoading />}>
          {fetchError ? (
            <NoItems text="No items found." />
          ) : (
            <Fragment>
              <Title>{item.title}</Title>
              {item.type !== mediaType.audio ? (
                <Description dangerouslySetInnerHTML={{ __html: item.desc }} />
              ) : (
                <Description>Listen to the audio below</Description>
              )}
              <MediaWrap>
                {item.type === mediaType.image && (
                  <ItemImage title={item.title} url={item.href} />
                )}
                {item.type === mediaType.video && (
                  <video controls src={assets.videoURL} width="100%">
                    {/* <track default kind="subtitles" srcLang="en" src={subtitles} /> */}
                    Sorry, your browser does not support embedded videos.
                  </video>
                )}
                {item.type === mediaType.audio && (
                  <audio controls src={assets.audioURL} width="100%">
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
