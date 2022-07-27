import axios from "axios";
import jwt_decode from "jwt-decode";
const END_POINT = process.env.REACT_APP_API+"users/";
export const user_signup = (data, navigate) => {
  axios
    .post(END_POINT+ "signup", data)
    .then((result) => {
      alert("signup successfully now you can login");
      navigate("/login");
    })
    .catch((err) => {
      alert("email already exist");
    });
};
export const user_login = (data, navigate) => {
  axios
    .post(END_POINT + "login", data)
    .then((result) => {
      const decoded = jwt_decode(result.data.token);
      const id = decoded.user._id;
      axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
      navigate("/posts/" + id);
      window.location.reload(false);
    })
    .catch((err) => {
      alert("invalid Email or Password");
    });
};

export const user_id = (cookies) => {
  if (cookies.jwt) {
    const decoded = jwt_decode(cookies.jwt);
    const id = decoded.user._id;
    return id;
  }
};
