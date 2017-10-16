export default function isLoggedIn() {
  return localStorage.UserID ? true : false;
};
