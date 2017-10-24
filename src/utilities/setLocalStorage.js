import setAuthorizationToken from "./setAuthorizationToken";

export default function setLocalStorage(res) {
    const token = res.token;
    const id = res.id;
    localStorage.setItem("Token", token);
    localStorage.setItem("UserID", id);
    setAuthorizationToken(token);
}
