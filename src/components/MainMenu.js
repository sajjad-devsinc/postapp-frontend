import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const MainMenu=()=>{
    const [cookies, setCookie, removeCookie] = useCookies();
    const stylesheet = {
        link: {
          color: "white",
          fontSize: "20px",
          textDecoration: "none",
          marginRight: "20px",
        },
      };
    return(
<div className="container-fluid">
        <nav className="menu">
          <Link style={stylesheet.link} to="/">
            All Posts
          </Link>
          {cookies.jwt?<Link style={stylesheet.link} to="profile">Profile</Link>:<>
          <Link style={stylesheet.link} to="../signup">
            Signup
          </Link>
          <Link style={stylesheet.link} to="../login">
            Login
          </Link>
          </>}
         
        
        </nav>
      </div>
    )
   
}

export default MainMenu;