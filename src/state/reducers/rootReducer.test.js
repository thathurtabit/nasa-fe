import reducer from './rootReducer';
import * as types from '../constants/stateConstants';
import initState from '../store/initState';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initState, {})).toEqual(initState);
  });

  it('should handle SET_SEARCH', () => {
    expect(
      reducer(initState, {
        type: types.SET_SEARCH,
        payload: 'Search',
      })
    ).toEqual({
      ...initState,
      searchValue: 'Search',
    });
  });

  it('should handle SET_FILTER', () => {
    expect(
      reducer(initState, {
        type: types.SET_FILTER,
        payload: 'video',
      })
    ).toEqual({
      ...initState,
      filteredMediaType: 'video',
    });
  });

  it('should handle REQUEST_DATA', () => {
    expect(
      reducer(initState, {
        type: types.REQUEST_DATA,
        payload: true,
      })
    ).toEqual({
      ...initState,
      fetching: true,
    });
  });

  it('should handle REQUEST_DATA_ERROR', () => {
    expect(
      reducer(initState, {
        type: types.REQUEST_DATA_ERROR,
        payload: true,
      })
    ).toEqual({
      ...initState,
      fetchError: true,
    });
  });

  it('should handle RECEIVED_DATA', () => {
    expect(
      reducer(initState, {
        type: types.RECEIVE_DATA,
        payload: {},
      })
    ).toEqual({
      ...initState,
      response: {},
    });
  });

  it('should handle TOGGLE_MODAL', () => {
    expect(
      reducer(initState, {
        type: types.TOGGLE_MODAL,
        payload: true,
      })
    ).toEqual({
      ...initState,
      modalOpen: true,
    });
  });
});
