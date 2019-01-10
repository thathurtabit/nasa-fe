import { requestData } from './requestData';
import { receiveData } from './receiveData';
import { requestDataError } from './requestDataError';
import initState from '../store/initState';
import { hasKey } from '../../utils/helpers/hasKey';

export const fetchData = searchValue => dispatch => {
  const { search, type } = searchValue;
  const hasType = hasKey(type, 'length') && type.length;
  const mediaType = hasType ? `&media_type=${type}` : '';
  const apiKey = '?api_key=ejPLPC3ZlGf2gRQLnw3CcFenw4TGgtvxiKeFF1aL';

  if (!search.length) return;

  dispatch(requestData());
  return fetch(`${initState.api}/search?q=${search}${mediaType}${apiKey}`)
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
