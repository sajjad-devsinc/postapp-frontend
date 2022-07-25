import React, { useState, useEffect } from "react";
import { Link ,Outlet} from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { user_id } from "../api/Users";
import axios from "axios";
const NavigationBar = () => {
  const [cookies,setCookie ,removeCookie] = useCookies();
  const [id, setId] = useState();
  function handleRemoveCookie() {
    removeCookie("jwt",{ path: '/' });
    axios.defaults.headers.common.Authorization = null;
  }
  useEffect(
    ()=>{
      const id = user_id(cookies);
      setId(id);
    },[]
  )

  const stylesheet = {
    link: {
      color: "white",
      fontSize: "20px",
      textDecoration: "none",
      marginRight: "20px",
    },
  };
  return (
    <div className="container-fluid">
      <nav className="menu">
        <Link style={stylesheet.link} to="/">
          All Posts
        </Link>
        {cookies.jwt ? (
          <>
            <Link style={stylesheet.link} to={"./posts/" + id}>
              My Posts
            </Link>
            <Link style={stylesheet.link} to="drafts">
              Drafts
            </Link>
            <Link style={stylesheet.link} to="posts/new">
              Add Posts
            </Link>
            <Link style={stylesheet.link} to="/"  onClick={handleRemoveCookie}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link style={stylesheet.link} to="../signup">
              Signup
            </Link>
            <Link style={stylesheet.link} to="../login">
              Login
            </Link>
          </>
        )}
      </nav>

    </div>
  );
};

export default NavigationBar;
