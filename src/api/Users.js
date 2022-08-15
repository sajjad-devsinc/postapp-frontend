/* eslint-disable no-undef */
import axios from "axios";
import jwt_decode from "jwt-decode";

const END_POINT = process.env.REACT_APP_API + "users/";

export const userSignup = (data) => axios.post(END_POINT + "signup", data);

export const userLogin = (data) => axios.post(END_POINT + "login", data);

export const userId = () => {
  if (localStorage.getItem("jwt")) {
    const decoded = jwt_decode(localStorage.getItem("jwt"));
    const id = decoded.user._id;
    return id;
  }
};
