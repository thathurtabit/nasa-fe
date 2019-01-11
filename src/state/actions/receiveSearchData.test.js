import * as actions from './receiveSearchData';
import { RECEIVE_SEARCH_DATA } from '../constants/stateConstants';

describe('receiveSearchData Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = { collection: { items: [] } };
    const expectedAction = {
      type: RECEIVE_SEARCH_DATA,
      payload: payload.collection.items,
    };
    expect(actions.receiveSearchData(payload)).toEqual(expectedAction);
  });
});
