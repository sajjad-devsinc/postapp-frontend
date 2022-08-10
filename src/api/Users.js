import axios from "axios";
import jwt_decode from "jwt-decode";

const END_POINT = process.env.REACT_APP_API + "users/";

export const user_signup = (data) => axios.post(END_POINT + "signup", data);

export const user_login = (data) => axios.post(END_POINT + "login", data);

export const user_id = (cookies) => {
  if (cookies.jwt) {
    const decoded = jwt_decode(cookies.jwt);
    const id = decoded.user._id;
    return id;
  }
};
