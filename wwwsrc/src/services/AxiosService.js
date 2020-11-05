import Axios from "axios";

let baseURL = location.host.includes("localhost")
  ? "http://localhost:5001/"
  : "/";
export const api = Axios.create({
  baseURL: baseURL + "api",
  timeout: 3000,
});

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer;
};

export const resetBearer = function() {
  api.defaults.headers.authorization = "";
};
