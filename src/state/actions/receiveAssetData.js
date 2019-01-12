import { RECEIVE_ASSET_DATA } from '../constants/stateConstants';
import { hasKey } from '../../utils/helpers/hasKey';
import { NoURL } from '../../utils/constants/constants';

export const receiveAssetData = json => {
  const response = json.collection.items;

  // Check for required values, and keep only what we need
  const responseMapped = response.map(item =>
    hasKey(item, `href`) ? item.href : NoURL
  );

  const videoOrig = responseMapped.find(item => item.includes('~orig.mp4'));
  const videoMedium = responseMapped.find(item => item.includes('~medium.mp4'));
  const subtitles = responseMapped.find(item => item.includes('.srt'));
  const audioURL = responseMapped.find(item => item.includes('~orig.mp3'));

  const responseFiltered = {
    videoURL: videoOrig || videoMedium,
    subtitles,
    audioURL,
  };

  return {
    type: RECEIVE_ASSET_DATA,
    payload: responseFiltered,
  };
};
