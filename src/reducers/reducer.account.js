import * as types from '../actions/action.types';

const INITIAL_STATE = {
  isFetching: false,
  isReceived: false,
  profile: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ACCOUNT_PROFILE_REQUEST:
      return { ...state, isFetching: true }

    case types.ACCOUNT_PROFILE_RECEIVED:
      return { ...state, isFetching: false, isReceived: true, profile: action.payload }

    case types.ACCOUNT_PROFILE_ERROR:
      return { ...state, isFetching: false, error: action.payload }

    case types.NEW_POST_REQUEST:
      return { ...state, isFetching: true }

    case types.NEW_POST_SUCCESS:
      return {...state, isFetching: false, isReceived: true}

    case types.UPDATE_PROFILE_REQUEST:
      return { ...state, isFetching: true }

    case types.UPDATE_PROFILE_SUCCESS:
      return { ...state, isFetching: false, isReceived: true}

    case types.UPDATE_PROFILE_ERROR:
      return { ...state, isFetching: false, error: action.payload }

    case types.LOGOUT_REQUEST:
      return { ...state, INITIAL_STATE};

    default:
      return state;
  }
};
