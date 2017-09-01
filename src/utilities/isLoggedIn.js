export default function isLoggedIn() {
  (!localStorage.UserID) ? true : false;
}
