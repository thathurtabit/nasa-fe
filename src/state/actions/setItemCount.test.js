import * as actions from './setItemCount';
import { SET_ITEM_COUNT } from '../constants/stateConstants';

describe('setItemCount Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = 200;
    const expectedAction = {
      type: SET_ITEM_COUNT,
      payload,
    };
    expect(actions.setItemCount(payload)).toEqual(expectedAction);
  });
});
