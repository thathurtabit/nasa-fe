import * as actions from './setFilter';
import { SET_FILTER } from '../constants/stateConstants';

describe('setFilter Action', () => {
  it('should create an action and deliver the type', () => {
    const payload = 'video';
    const expectedAction = {
      type: SET_FILTER,
      payload,
    };
    expect(actions.setFilter(payload)).toEqual(expectedAction);
  });
});
