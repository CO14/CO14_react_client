import axios from 'axios';
import setLocalStorage from '../utilities/setLocalStorage';
import * as types from './action.types';
import { AUTH_URL } from '../utilities/API';

export const userSignupRequest = (userData) => {
  return dispatch => {
    dispatch({type: types.SIGNUP_REQUEST});
    return axios.post(`${AUTH_URL}/signup`, userData)
    .then(res => {
      dispatch({type: types.SIGNUP_SUCCESS});
      setLocalStorage(res);
    })
    .catch(error => {
      dispatch({type: types.SIGNUP_ERROR, payload: error});
    });
  };
};

export const userLoginRequest = (credentials) => {
  return dispatch => {
    dispatch({type: types.LOGIN_REQUEST});
    return axios.post(`${AUTH_URL}/login`, credentials)
    .then(res => {
      dispatch({type: types.LOGIN_SUCCESS});
      setLocalStorage(res.data);
    })
    .catch(error => {
      dispatch({type: types.LOGIN_ERROR, payload: error});
    });
  };
};

export const userLogout = () => {
  return dispatch => {
    dispatch({type: types.LOGOUT_REQUEST});
  }
};

export const updateLoginForm = ({ property, value }) => {
  return {
    type: types.AUTH_FORM_UPDATE,
    payload: {
      property,
      value
    }
  };
}
