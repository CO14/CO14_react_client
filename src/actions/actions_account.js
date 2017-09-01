import axios from 'axios';

import {ACCOUNT_PROFILE_REQUEST} from './action_types';

const API_URL = window.location.hostname === "localhost" ? "http://localhost:5000/api/v1" : "https://co14.herokuapp.com/api/v1"

export const getAccountProfile = (userID) => {
  return dispatch => {
    axios.get(`${API_URL}/users/${userID}`)
    .then(response => dispatch({
      type: ACCOUNT_PROFILE_REQUEST,
      payload: response.data
    }))
  }
}
