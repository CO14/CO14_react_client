import axios from 'axios';

import {SIGNUP_REQUEST, LOGIN_REQUEST} from './action_types';

import setAuthorizationToken from '../utilities/setAuthorizationToken';

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

const setLocalStorage = (res) => {
  const token = res.data.token;
  const id = res.data.id;
  localStorage.setItem('Token', token);
  localStorage.setItem('UserID', id);
  setAuthorizationToken(token);
}
