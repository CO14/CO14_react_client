import * as types from '../actions/action.types';

const INITIAL_STATE = {
  isFetching: false,
  isReceived: false,
  peaks: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PEAK_REQUEST:
      return { ...state, isFetching: true }

    case types.PEAK_RECEIVED:
      return { ...state, isFetching: false, isReceived: true, peaks: action.payload }

    case types.PEAK_ERROR:
      return { ...state, isFetching: false, error: action.payload }

    case types.LOGOUT_REQUEST:
      return { ...state, INITIAL_STATE};

    default:
      return state;
  }
};
