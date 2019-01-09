import * as actions from './receiveData';
import { RECEIVE_DATA } from '../constants/stateConstants';

describe('receiveData Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = { collection: { items: [] } };
    const expectedAction = {
      type: RECEIVE_DATA,
      payload: payload.collection.items,
    };
    expect(actions.receiveData(payload)).toEqual(expectedAction);
  });
});
