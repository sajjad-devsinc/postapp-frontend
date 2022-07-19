import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainMenu from "../components/MainMenu";
import { useCookies } from "react-cookie";
import {user_login} from '../api/Users';
axios.defaults.withCredentials=true;
const LogIn = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  useEffect(
    ()=>{
      if(cookies.jwt){
        navigate("/profile");
      }
    }
  )
  const [data, setdata] = useState({ email: "",password:"" });
  const InputHandler = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const login = () => {
   user_login(data,navigate);

  };

  return (
    <div>
       <MainMenu></MainMenu>
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
    </div>
   
  );
};

export default LogIn;
