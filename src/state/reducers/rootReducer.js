import * as types from '../constants/stateConstants';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
        response: action.payload.length ? state.response : [],
      };
    case types.SET_FILTER:
      return {
        ...state,
        filteredMediaType: action.payload.length ? action.payload : '',
      };
    case types.REQUEST_DATA:
      return { ...state, fetching: true };
    case types.REQUEST_DATA_ERROR:
      return { ...state, fetchError: action.payload, fetching: false };
    case types.RECEIVE_DATA:
      return {
        ...state,
        response: action.payload,
        fetching: false,
        itemCount: action.payload.length,
      };
    case types.TOGGLE_MODAL:
      return { ...state, modalOpen: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
