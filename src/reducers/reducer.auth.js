import * as types from '../actions/action.types';

const INITIAL_STATE = {
  isFetching: false,
  isReceived: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isFetching: true }

    case types.LOGIN_SUCCESS:
      return { ...state, isFetching: false, isReceived: true }

    case types.LOGIN_ERROR:
      return { ...state, isFetching: false, error: action.payload }

    case types.SIGNUP_REQUEST:
      return { ...state, isFetching: true }

    case types.SIGNUP_SUCCESS:
      return { ...state, isFetching: false, isReceived: true }

    case types.SIGNUP_ERROR:
      return { ...state, isFetching: false, error: action.payload }

    case types.LOGOUT_REQUEST:
      return INITIAL_STATE;

    default:
      return state;
  }
};
