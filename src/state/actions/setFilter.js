import { SET_FILTER } from '../constants/stateConstants';

export const setFilter = string => ({
  type: SET_FILTER,
  payload: string,
});
