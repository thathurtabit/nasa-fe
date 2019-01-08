import { SET_ITEM_COUNT } from '../constants/stateConstants';

export const setItemCount = int => ({
  type: SET_ITEM_COUNT,
  payload: int,
});
