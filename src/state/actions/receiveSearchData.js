import { RECEIVE_SEARCH_DATA } from '../constants/stateConstants';
import { hasKey } from '../../utils/helpers/hasKey';
import {
  NoTitle,
  NoDesc,
  NoURL,
  NoAssetTitle,
  NoAssetSubtitle,
} from '../../utils/constants/constants';

export const receiveSearchData = json => {
  const response = json.collection.items;
  let responseFiltered;

  console.log('searchData: ', json);

  if (response.length >= 1) {
    // Check for required values, and keep only what we need
    responseFiltered = response.map(item => ({
      title: hasKey(item, `data[0].title`) ? item.data[0].title : NoTitle,
      desc: hasKey(item, `data[0].description`)
        ? item.data[0].description
        : NoDesc,
      href: hasKey(item, `links[0].href`) ? item.links[0].href : NoURL,
      itemID: hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : null,
      type: hasKey(item, `data[0].media_type`) ? item.data[0].media_type : null,
      link: `/asset/${
        hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : 'null'
      }`,
    }));
  } else {
    responseFiltered = [
      {
        title: NoAssetTitle,
        desc: NoAssetSubtitle,
        href: NoURL,
        itemID: null,
        type: null,
        link: 'null',
      },
    ];
  }

  return {
    type: RECEIVE_SEARCH_DATA,
    payload: responseFiltered,
  };
};
