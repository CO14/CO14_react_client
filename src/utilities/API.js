import Axios from "axios";

export const API_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5000/api/v1"
        : "https://co14.herokuapp.com/api/v1";
export const AUTH_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5000/auth"
        : "https://co14.herokuapp.com/auth";

export const API = {
    serverWakeUp: () => {
        Axios.get(`${API_URL}/users`)
            .then(
                () => "This 'GET' request is used to wake up the Heroku server"
            )
            .catch(error => console.error(error));
    }
};
