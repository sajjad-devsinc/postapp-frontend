import axios from "axios";
import Cookies from "js-cookie";

const set_token = () => {
  axios.defaults.headers.common.Authorization = `Bearer ${Cookies.get("jwt")}`;
  return axios;
};

export default set_token;
