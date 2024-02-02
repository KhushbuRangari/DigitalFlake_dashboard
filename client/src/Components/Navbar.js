import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
    const auth = useAuthContext();
    function hangleLogout(e) {
      auth.logout(true);
      alert("user logged out")
    }

    const handleLogin = ()=>{
   navigate("/")
    }

    // console.log(auth.user.token,"user");
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <i className="fa fa-dashcube" style={{ color: "white", border: "none" }}>
          digitalflake
        </i>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse d-flex justify-content-end navbar-collapse"
        id="navbarSupportedContent"
      >

        {
          auth.isLogged?     <button className="btn btn-outline-success  my-2 my-sm-0" type="submit" onClick={hangleLogout}>
          <i
            className="fa fa-user-circle"
            style={{ fontSize: "36px", border:"none" }}
          >Logout</i>
        </button>:
       ""
        }
   
      </div>
    </nav>
  );
}

export default Navbar;
