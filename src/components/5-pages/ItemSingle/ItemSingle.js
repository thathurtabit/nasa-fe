import React, { Component, Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemSingleStyled, {
  Title,
  Description,
  MediaWrap,
  Credit,
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
import { getItemID } from '../../../utils/helpers/getItemID';
import { hasKey } from '../../../utils/helpers/hasKey';

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
  state = {};

  componentDidMount() {
    const { fetchSearchData, fetchAssetData, location } = this.props;

    // Get location from props
    const itemID = getItemID(location);

    // Get data on mount, data will be picked up by componentDidUpdate
    fetchSearchData({ search: itemID, type: '' });
    fetchAssetData(itemID);
  }

  render() {
    const { fetchError, fetching, items, assets } = this.props;

    const title = hasKey(items[0], 'title') ? items[0].title : NoAssetTitle;
    const type = hasKey(items[0], 'type') ? items[0].type : null;
    const desc = hasKey(items[0], 'desc') ? items[0].desc : NoAssetSubtitle;
    const credit = hasKey(items[0], 'credit') ? items[0].credit : null;
    const href = hasKey(items[0], 'href') ? items[0].href : null;

    const videoURL = hasKey(assets, 'videoURL') ? assets.videoURL : null;
    const audioURL = hasKey(assets, 'audioURL') ? assets.audioURL : null;

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
                <Description dangerouslySetInnerHTML={{ __html: desc }} />
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

                {credit && <Credit>{credit}</Credit>}
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
