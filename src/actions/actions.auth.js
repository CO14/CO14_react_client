import axios from "axios";
import * as types from "./action.types";
import { AUTH_URL } from "../utilities/API";
import Validation from "../utilities/validation";

export const userSignupRequest = userData => {
    return dispatch => {
        if (Validation.isUserValid(userData)) {
            dispatch({ type: types.SIGNUP_REQUEST });
            return axios
            .post(`${AUTH_URL}/signup`, userData)
            .then(response => {
                dispatch({
                    type: types.SIGNUP_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({ type: types.SIGNUP_ERROR, payload: error });
                alert(error.response.data.message);
            });
        }
    };
};

export const userLoginRequest = credentials => {
    return dispatch => {
        if (Validation.isLoginValid(credentials)) {
            dispatch({ type: types.LOGIN_REQUEST });
            return axios
            .post(`${AUTH_URL}/login`, credentials)
            .then(response => {
                dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: types.LOGIN_ERROR, payload: error });
                alert(error.response.data.message);
            });
        }
    };
};

export const userLogout = () => {
    return dispatch => {
        dispatch({ type: types.LOGOUT_REQUEST });
        localStorage.clear();
    };
};

export const updateLoginForm = ({ property, value }) => {
    return {
        type: types.AUTH_FORM_UPDATE,
        payload: {
            property,
            value
        }
    };
};

export const profileRedirect = () => {
    return {
        type: types.REDIRECT_TO_PROFILE
    }
}
