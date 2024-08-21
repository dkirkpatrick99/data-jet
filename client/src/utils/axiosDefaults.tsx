import axios from "axios";
import Cookie from "js-cookie";

// Custom HTTP configurations for Axios Authorization: `${token}`
export const getClient = () => {
  const token = Cookie.get("userToken");
  
  axios.defaults.headers.common["Content-Range"] = "bytes 0-4999999/*";
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.common["Authorization"] = `${token}`;

  axios.defaults.baseURL = "http://localhost:8080/api";

  axios.defaults.timeout = 30000;
  
  return axios;
};
