import setAuthorizationToken from './setAuthorizationToken';

export default function setLocalStorage(res) {
  const token = res.data.token;
  const id = res.data.id;
  localStorage.setItem('Token', token);
  localStorage.setItem('UserID', id);
  setAuthorizationToken(token);
}
