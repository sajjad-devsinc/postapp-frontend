import React, { useEffect, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import {user_signup} from '../api/Users';
const SignUp = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  useEffect(
    ()=>{
      if(cookies.jwt){
        navigate("/profile");
      }
    }
  )
  const [data, setdata] = useState({name: "", email: "", password: "" });
  const handlerInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const signup =  () => {
    const regex = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
    if (data.name === "" || data.email === "" || data.password === "") {
      alert("Please Fill all the fields");
    } else if (!regex.test(data.password)) {
      alert(
        "Please enter Valid password : Minimum eight characters, at least one uppercase letter, one lowercase letter one number and one special character"
      );
    } else {
      user_signup(data,navigate)
        }

  };


  return (

    <div className="center">

      <h1>Welcome To Post App</h1>
      <h1>Signup forms</h1>
      <br></br>
      <form onSubmit={handlerInput}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Your Name"
          value={data.fname}
          onChange={handlerInput}
          name="name"
          required
        />
        <input
          className="form-control"
          type="email"
          placeholder="Enter Your Email"
          value={data.email}
          onChange={handlerInput}
          name="email"
          required
        />
        <input
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
          value={data.password}
          onChange={handlerInput}
          name="password"
          required
        />
        <input
          className="form-control"
          type="submit"
          onClick={signup}
          value="Sign Up"
        />
      </form>
      <button className="button">
        <Link to="/login">Login</Link>
      </button>
    </div>

  );
};

export default SignUp;
