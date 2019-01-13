import 'whatwg-fetch';
import { requestData } from './requestData';
import { receiveAssetData } from './receiveAssetData';
import { requestDataError } from './requestDataError';
import { api, requestType } from '../../utils/constants/constants';

export const fetchAssetData = assetID => dispatch => {
  if (!assetID) return;
  dispatch(requestData());
  return fetch(`${api}${requestType.asset}${assetID}`)
    .then(response => {
      if (!response.ok) {
        dispatch(receiveAssetData(response));
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => {
      dispatch(receiveAssetData(response));
    })
    .catch(error => dispatch(requestDataError(error)));
};
