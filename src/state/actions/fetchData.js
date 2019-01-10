import { requestData } from './requestData';
import { receiveData } from './receiveData';
import { requestDataError } from './requestDataError';
import initState from '../store/initState';

export const fetchData = searchValue => dispatch => {
  const { search, type } = searchValue;
  const mediaType = type.length ? `&media_type=${type}` : '';

  if (!search.length) return;

  dispatch(requestData());
  return fetch(`${initState.api}/search?q=${search}${mediaType}`)
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
