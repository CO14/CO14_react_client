import axios from 'axios';

import setLocalStorage from '../utilities/setLocalStorage';

const AUTH_URL = window.location.hostname === "localhost" ? "http://localhost:5000/auth" : "https://co14.herokuapp.com/auth";

export const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post(`${AUTH_URL}/signup`, userData).then(res => {
      setLocalStorage(res);
    });
  }
};

export const userLoginRequest = (credentials) => {
  return dispatch => {
    return axios.post(`${AUTH_URL}/login`, credentials).then(res => {
      setLocalStorage(res);
    });
  }
};
