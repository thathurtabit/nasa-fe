import { requestData } from './requestData';
import { receiveData } from './receiveData';
import { requestDataError } from './requestDataError';
import { hasKey } from '../../utils/helpers/hasKey';
import { api } from '../../utils/constants/constants';

export const fetchData = searchValue => dispatch => {
  const { search, type } = searchValue;
  const hasType = hasKey(type, 'length') && type.length;
  const mediaType = hasType ? `&media_type=${type}` : '';

  if (!search.length) return;

  dispatch(requestData());
  return fetch(`${api}/search?q=${search}${mediaType}`)
    .then(response => {
      if (!response.ok) {
        dispatch(receiveData(response));
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => {
      dispatch(receiveData(response));
    })
    .catch(error => dispatch(requestDataError(error)));
};
