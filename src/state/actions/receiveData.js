import { RECEIVE_DATA } from '../constants/stateConstants';
import { hasKey } from '../../utils/helpers/hasKey';
import { NoTitle, NoDesc, NoURL } from '../../utils/constants/constants';

export const receiveData = json => {
  // Filter out Video
  const response = json.collection.items.filter(
    item => item.data[0].media_type !== 'video'
  );

  // Check for required values, and keep only what we need
  const responseFiltered = response.map(item => ({
    title: hasKey(item, `data[0].title`) ? item.data[0].title : NoTitle,
    desc: hasKey(item, `data[0].description`)
      ? item.data[0].description
      : NoDesc,
    imgSrc: hasKey(item, `links[0].href`) ? item.links[0].href : NoURL,
    itemID: hasKey(item, `data[0].nasa_id`) ? item.data[0].nasa_id : null,
    link: `/asset/${hasKey(item, `data[0].nasa_id`) && item.data[0].nasa_id}`,
  }));

  return {
    type: RECEIVE_DATA,
    payload: responseFiltered,
  };
};
