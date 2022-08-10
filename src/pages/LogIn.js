import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import set_token from "../api/index";
import jwt_decode from "jwt-decode";
import * as UserHelper from "../api/Users";

const LogIn = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const [data, setdata] = useState({ email: "", password: "" });

  useEffect(() => {
    const id = UserHelper.user_id(cookies);
    if (cookies.jwt) {
      const url = "/posts/" + id;
      navigate(url);
    }
  }, [cookies, navigate]);

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const login = useCallback(async () => {
    try {
      const user = await UserHelper.user_login(data);
      console.log(user);
      const decoded = jwt_decode(user.data.token);
      const id = decoded.user._id;
      console.log(id);
      set_token();
      navigate("/posts/" + id);
      // window.location.reload(false);
    } catch (err) {
      alert("invalid Email or Password");
    }
  }, [data, navigate]);

  return (
    <div className="center">
      <h1>Welcome To Post App</h1>
      <h1>Login forms</h1>
      <br></br>
      <form
        style={{ margin: "auto", width: "400px" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="form-control"
          type="email"
          placeholder="Enter Your Email"
          onChange={InputHandler}
          name="email"
        />
        <input
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
          onChange={InputHandler}
          name="password"
        />
        <input
          className="form-control"
          type="submit"
          value="Login"
          onClick={() => {
            login();
          }}
        />
      </form>
      <button className="button">
        <Link to="/signup">Sign Up</Link>
      </button>
    </div>
  );
};

export default LogIn;
