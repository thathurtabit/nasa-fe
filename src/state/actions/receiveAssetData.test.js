import * as actions from './receiveAssetData';
import { RECEIVE_ASSET_DATA } from '../constants/stateConstants';

describe('receiveAssetData Action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = { collection: { items: [] } };
    const result = {
      videoURL: undefined,
      subtitles: undefined,
      audioURL: undefined,
    };
    const expectedAction = {
      type: RECEIVE_ASSET_DATA,
      payload: result,
    };
    expect(actions.receiveAssetData(payload)).toEqual(expectedAction);
  });
});
