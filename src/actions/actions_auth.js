import axios from 'axios';
import setLocalStorage from '../utilities/setLocalStorage';
import { AUTH_URL } from '../utilities/API';

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
