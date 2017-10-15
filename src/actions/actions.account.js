import axios from 'axios';
import {API_URL} from '../utilities/API';
import * as types from './action.types';

export const fetchUserProfile = (userID) => {
  return (dispatch) => {
    dispatch({type: types.ACCOUNT_PROFILE_REQUEST});
    return axios.get(`${API_URL}/users/${userID}`).then(response => {
      dispatch({type: types.ACCOUNT_PROFILE_RECEIVED, payload: response.data[0]});
    }).catch(error => {
      dispatch({type: types.ACCOUNT_PROFILE_ERROR, payload: error.response.data});
    });
  };
};

export const fetchPeaks = () => {
  return (dispatch) => {
    dispatch({type: types.PEAK_REQUEST});
    return axios.get(`${API_URL}/peaks`).then(response => {
      dispatch({type: types.PEAK_RECEIVED, payload: response.data});
    }).catch(error => {
      dispatch({type: types.PEAK_ERROR, payload: error.response.data});
    });
  };
};

export const updateUserProfileRequest = (profile, userID) => {
  return (dispatch) => {
    dispatch({type: types.UPDATE_PROFILE_REQUEST});
    return axios.put(`${API_URL}/users/${userID}`, profile).then(response => {
      dispatch({type: types.UPDATE_PROFILE_SUCCESS});
    }).catch(error => {
      dispatch({type: types.UPDATE_PROFILE_ERROR});
    });
  };
};

export const addNewGoal = (userID, peak) => {
  return (dispatch) => {
    dispatch({type: types.CREATE_USER_GOAL_REQUEST});
    return axios.post(`${API_URL}/users/${userID}/peaks`, peak).then(response => {
      dispatch({type: types.CREATE_USER_GOAL_SUCCESS, payload: response.data});
    }).catch(error => {
      dispatch({type: types.CREATE_USER_GOAL_ERROR, payload: error.response.data});
    });
  };
};

export const removeUserGoal = (userID, request) => {
  return (dispatch) => {
    dispatch({type: types.DELETE_USER_GOAL_REQUEST});
    return axios.delete(`${API_URL}/users/${userID}/peaks`, {data: request}).then(response => {
      dispatch({type: types.DELETE_USER_GOAL_SUCCESS});
    }).catch(error => {
      dispatch({type: types.DELETE_USER_GOAL_ERROR, payload: error.response.data});
    });
  };
};

export const updateUserGoal = (userID, request) => {
  return (dispatch) => {
    dispatch({type: types.UPDATE_USER_GOAL_REQUEST});
    return axios.put(`${API_URL}/users/${userID}/peaks`, request).then(response => {
      dispatch({type: types.UPDATE_USER_GOAL_SUCCESS})
    }).catch(error => {
      dispatch({type: types.UPDATE_USER_GOAL_ERROR, payload: error.response.data})
    })
  };
};

export const updateGoalForm = ({ property, value }) => {
  return {
    type: types.GOAL_FORM_UPDATE,
    payload: {
      property,
      value
    }
  };
};
