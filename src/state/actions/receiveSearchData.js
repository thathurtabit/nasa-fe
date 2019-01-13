import { RECEIVE_SEARCH_DATA } from '../constants/stateConstants';
import { hasKey } from '../../utils/helpers/hasKey';
import { NoTitle, NoDesc, NoURL } from '../../utils/constants/constants';

export const receiveSearchData = json => {
  const response = json.collection.items;

  // Check for required values, and keep only what we need
  const responseFiltered = response.map(item => ({
    title: hasKey(item, `data[0].title`) ? item.data[0].title : NoTitle,
    desc: hasKey(item, `data[0].description`)
      ? item.data[0].description
      : NoDesc,
    href: hasKey(item, `links[0].href`) ? item.links[0].href : NoURL,
    itemID: hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : null,
    type: hasKey(item, `data[0].media_type`) ? item.data[0].media_type : null,
    credit: hasKey(item, `data[0].secondary_creator`)
      ? item.data[0].secondary_creator
      : null,
    link: `/asset/${
      hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : 'null'
    }`,
  }));

  return {
    type: RECEIVE_SEARCH_DATA,
    payload: responseFiltered,
  };
};
