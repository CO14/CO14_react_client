import * as types from '../actions/action.types';

const INITIAL_STATE = {
  isFetching: false,
  isReceived: false,
  error: null,
  user: [],
  redirectToProfile: false,
  first_name: '',
  last_name: '',
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.AUTH_FORM_UPDATE:
      return {
        ...state,
          [action.payload.property]: action.payload.value
        };

    case types.LOGIN_REQUEST:
      return {
        ...state,
          isFetching: true,
          isReceived: false,
          redirectToProfile: false
        };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
          isFetching: false,
          isReceived: true,
          redirectToProfile: true,
          user: action.payload
        };

    case types.LOGIN_ERROR:
      return {
        ...state,
          isFetching: false,
          isReceived: false,
          redirectToProfile: false,
          error: action.payload
        };

    case types.SIGNUP_REQUEST:
      return {
        ...state,
          isFetching: true,
          isReceived: false,
          redirectToProfile: false
        };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
          isFetching: false,
          isReceived: true,
          redirectToProfile: true
        };

    case types.SIGNUP_ERROR:
      return {
        ...state,
          isFetching: false,
          isReceived: false,
          redirectToProfile: false,
          error: action.payload
        };

    case types.LOGOUT_REQUEST:
      return {
        ...state,
          INITIAL_STATE
        };

    default:
      return state;
  }
};
