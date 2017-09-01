import axios from 'axios';

const AUTH_URL = window.location.hostname === "localhost" ? "http://localhost:5000/auth" : "https://co14.herokuapp.com/auth";

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const userSignupRequest = (userData) => {
  axios.post(`${AUTH_URL}/signup`, userData)
  return {
    type: SIGNUP_REQUEST
  }
};

export const userLoginRequest = (credentials) => {
  axios.post(`${AUTH_URL}/login`, credentials)
  return {
    type: LOGIN_REQUEST
  }
};
