import axios from 'axios';

import * as types from './action_types';

const API_URL = window.location.hostname === "localhost" ? "http://localhost:5000/api/v1" : "https://co14.herokuapp.com/api/v1";

export const fetchUserProfile = (userID) => {
  return dispatch => {
    dispatch({
      type: types.ACCOUNT_PROFILE_REQUEST
    });
    axios.get(`${API_URL}/users/${userID}`)
    .then(response => {
      dispatch({
        type: types.ACCOUNT_PROFILE_RECEIVED,
        payload: response.data[0]
      });
    }).catch(error => {
      dispatch({
        type: types.ACCOUNT_PROFILE_ERROR,
        payload: error
      });
    });
  }
}

export const fetchPeaks = () => {
  return dispatch => {
    dispatch({
      type: types.PEAK_REQUEST
    });
    axios.get(`${API_URL}/peaks`)
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

export const addNewGoal = (userID, peak) => {
  return dispatch => {
    dispatch({
      type: types.NEW_POST_REQUEST
    });
    axios.post(`${API_URL}/users/${userID}/peaks`, peak)
    .then(response => {
      dispatch({
        type: types.NEW_POST_SUCCESS,
      });
    });
  }
};
