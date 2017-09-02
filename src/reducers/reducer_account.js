import {ACCOUNT_PROFILE_REQUEST, ACCOUNT_PROFILE_RECEIVE, ACCOUNT_PROFILE_ERROR} from '../actions/action_types';

const INITIAL_STATE = {
  isFetching: false,
  isReceived: false,
  users: [],
  error: null
};

export default (state = [], action) => {
  switch (action.type) {
    case ACCOUNT_PROFILE_REQUEST:
      return { ...state, isFetching: true }
      break;
    case ACCOUNT_PROFILE_RECEIVE:
      return { ...state, isFetching: false, isReceived: true, users: action.payload }
      break;
    case ACCOUNT_PROFILE_ERROR:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state;
  }
};
