export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const API_URL = window.location.hostname === "localhost" ? "http://localhost/api/v1/" : "https://co14.herokuapp.com/api/v1/"

// export const requestLogin(credentials) => {
//   return {
//     type: LOGIN_REQUEST,
//     isFetching: true,
//     isAuthenticated: false,
//     credentials
//   }
// }
//
// export const receiveLogin(user) => {
//   return {
//     type: LOGIN_SUCCESS,
//     isFetching: false,
//     isAuthenticated: true,
//     id_token: user.id_token
//   }
// }
//
// export const loginError(message) => {
//   return {
//     type: LOGIN_FAILURE,
//     isFetching: false,
//     isAuthenticated: false,
//     message
//   }
// }

export const loginAction = () => {

  return {
    type: LOGIN_REQUEST
  }
};
