import axios from 'axios';

import {ACCOUNT_PROFILE_REQUEST, ACCOUNT_PROFILE_RECEIVED, ACCOUNT_PROFILE_ERROR} from './action_types';

const API_URL = window.location.hostname === "localhost" ? "http://localhost:5000/api/v1" : "https://co14.herokuapp.com/api/v1";

export const getUserProfile = (userID) => {
  return dispatch => {
    dispatch({type: ACCOUNT_PROFILE_REQUEST});
    axios.get(`${API_URL}/users/${userID}`).then(response => {
      dispatch({type: ACCOUNT_PROFILE_RECEIVED, payload: response.data[0]})
    }).catch(error => {
      dispatch({type: ACCOUNT_PROFILE_ERROR, payload: error})
    });
  }
}
