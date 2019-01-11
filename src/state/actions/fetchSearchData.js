import { requestData } from './requestData';
import { receiveSearchData } from './receiveSearchData';
import { requestDataError } from './requestDataError';
import { hasKey } from '../../utils/helpers/hasKey';
import { api, requestType } from '../../utils/constants/constants';

export const fetchSearchData = searchValue => dispatch => {
  const { search, type } = searchValue;
  const hasType = hasKey(type, 'length') && type.length;
  const mediaType = hasType ? `&media_type=${type}` : '';

  if (!search.length) return;

  dispatch(requestData());
  return fetch(`${api}${requestType.search}${search}${mediaType}`)
    .then(response => {
      if (!response.ok) {
        dispatch(receiveSearchData(response));
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => {
      dispatch(receiveSearchData(response));
    })
    .catch(error => dispatch(requestDataError(error)));
};
