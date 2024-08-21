import axios from "axios";

// Custom HTTP configurations for Axios
export const getClient = () => {
  axios.defaults.headers.common["Content-Range"] = "bytes 0-4999999/*";
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  axios.defaults.baseURL = "http://localhost:8080/api";

  axios.defaults.timeout = 30000;
  
  return axios;
};
