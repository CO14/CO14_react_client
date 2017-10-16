import * as types from "../actions/action.types";

const INITIAL_STATE = {
  isFetching: false,
  isReceived: false,
  error: null,
  profile: [],
  account_rating: "",
  account_image_url: "",
  date_complete: "",
  account_notes: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ACCOUNT_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isReceived: false,
        error: null
      };

    case types.ACCOUNT_PROFILE_RECEIVED:
      return {
        ...state,
        isFetching: false,
        isReceived: true,
        profile: action.payload,
        error: null
      };

    case types.ACCOUNT_PROFILE_ERROR:
      return {
        ...state,
        isFetching: false,
        isReceived: false,
        error: action.payload
      };

    case types.CREATE_USER_GOAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isReceived: false,
        error: null
      };

    case types.CREATE_USER_GOAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isReceived: true,
        error: null
      };

    case types.CREATE_USER_GOAL_ERROR:
      return {
        ...state,
        isFetching: false,
        isReceived: false,
        error: action.payload
      };

    case types.UPDATE_USER_GOAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isReceived: false,
        error: null
      };

    case types.UPDATE_USER_GOAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isReceived: true,
        error: null,
        account_rating: "",
        account_image_url: "",
        date_complete: "",
        account_notes: ""
      };

    case types.UPDATE_USER_GOAL_ERROR:
      return {
        ...state,
        isFetching: false,
        isReceived: false,
        error: action.payload,
        account_rating: "",
        account_image_url: "",
        date_complete: "",
        account_notes: ""
      };

    case types.DELETE_USER_GOAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isReceived: false,
        error: null,
        account_rating: "",
        account_image_url: "",
        date_complete: "",
        account_notes: ""
      };

    case types.DELETE_USER_GOAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isReceived: true,
        error: null,
        account_rating: "",
        account_image_url: "",
        date_complete: "",
        account_notes: ""
      };

    case types.DELETE_USER_GOAL_ERROR:
      return {
        ...state,
        isFetching: false,
        isReceived: false,
        error: action.payload,
        account_rating: "",
        account_image_url: "",
        date_complete: "",
        account_notes: ""
      };

    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isReceived: false,
        error: null
      };

    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isReceived: true,
        error: null
      };

    case types.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isFetching: false,
        isReceived: false,
        error: action.payload
      };

    case types.GOAL_FORM_UPDATE:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      };

    case types.LOGOUT_REQUEST:
      return INITIAL_STATE;

    default:
      return state;
  }
};
