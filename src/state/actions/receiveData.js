import { RECEIVE_DATA } from '../constants/stateConstants';
import { hasKey } from '../../utils/helpers/hasKey';
import { NoTitle, NoDesc, NoURL } from '../../utils/constants/constants';

// const fetchHref = href =>
//   fetch(href)
//     .then(res => res.json())
//     .then(json => json)
//     .catch(err => err);

export const receiveData = json => {
  const response = json.collection.items;

  // Check for required values, and keep only what we need
  const responseFiltered = response.map(item => ({
    title: hasKey(item, `data[0].title`) ? item.data[0].title : NoTitle,
    desc: hasKey(item, `data[0].description`)
      ? item.data[0].description
      : NoDesc,
    href: hasKey(item, `links[0].href`) ? item.links[0].href : NoURL,
    itemID: hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : null,
    json: hasKey(item, `href`) ? item.href : null,
    type: hasKey(item, `data[0].media_type`) ? item.data[0].media_type : null,
    link: `/asset/${
      hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : 'null'
    }`,
  }));

  return {
    type: RECEIVE_DATA,
    payload: responseFiltered,
  };
};
