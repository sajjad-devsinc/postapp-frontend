import axios from "axios";

const set_token = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios;
};

export default set_token;
