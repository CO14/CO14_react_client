import axios from 'axios';
import { API_URL } from '../utilities/API';
import * as types from './action.types';

export const fetchUserProfile = (userID) => {
  return (dispatch) => {
    dispatch({
      type: types.ACCOUNT_PROFILE_REQUEST
    });
    return axios.get(`${API_URL}/users/${userID}`)
    .then(response => {
      setTimeout(() => {
        dispatch({
          type: types.ACCOUNT_PROFILE_RECEIVED,
          payload: response.data[0]
        });
      }, 600)
    }).catch(error => {
      dispatch({
        type: types.ACCOUNT_PROFILE_ERROR,
        payload: error
      });
    });
  }
}

export const fetchPeaks = () => {
  return (dispatch) => {
    dispatch({
      type: types.PEAK_REQUEST
    });
    return axios.get(`${API_URL}/peaks`)
    .then(response => {
      dispatch({
        type: types.PEAK_RECEIVED,
        payload: response.data
      });
    }).catch(error => {
      dispatch({
        type: types.PEAK_ERROR,
        payload: error
      });
    });
  }
}


export const updateUserProfileRequest = (profile, userID) => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_PROFILE_REQUEST
    });
    return axios.put(`${API_URL}/users/${userID}`, profile)
      .then(response => {
        // console.log(response);
        dispatch({
          type: types.UPDATE_PROFILE_SUCCESS,
        });
    }).catch(error => {
      dispatch({
        type: types.UPDATE_PROFILE_ERROR
      });
    });
  }
};

export const addNewGoal = (userID, peak) => {
  return (dispatch) => {
    dispatch({
      type: types.NEW_POST_REQUEST
    });
    return axios.post(`${API_URL}/users/${userID}/peaks`, peak)
    .then(response => {
      dispatch({
        type: types.NEW_POST_SUCCESS,
        payload: response.data
      });
    }).catch(error => {
      dispatch({
        type: types.NEW_POST_ERROR,
        payload: error
      });
    });
  }
};
