import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as UserHelper from "../api/Users";
import axios from "axios";
const Profile = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies();
  const [id, setId] = useState();
  function handleRemoveCookie() {
    removeCookie("jwt");
    axios.defaults.headers.common.Authorization = null;
  }

  useEffect(() => {
    const Id = UserHelper.userId(cookies);
    setId(Id);
    navigate("./posts/" + Id);
  }, [cookies, navigate]);
  return (
    <>
      <div className="container-fluid">
        <nav className="menu">
          <Link style={stylesheet.link} to="/">
            All Posts
          </Link>
          <Link style={stylesheet.link} to={"./posts/" + id}>
            My Posts
          </Link>
          <Link style={stylesheet.link} to="drafts">
            Drafts
          </Link>
          <Link style={stylesheet.link} to="posts/new">
            Add Posts
          </Link>
          <Link style={stylesheet.link} to="/" onClick={handleRemoveCookie}>
            Logout
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

const stylesheet = {
  link: {
    color: "white",
    fontSize: "20px",
    textDecoration: "none",
    marginRight: "20px",
  },
};

export default Profile;
