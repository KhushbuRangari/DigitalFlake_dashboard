import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  

    function hangleLogout(e) {
  
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <i class="fa fa-dashcube" style={{ color: "white", border: "none" }}>
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
        <button class="btn btn-outline-success  my-2 my-sm-0" type="submit" onClick={hangleLogout}>
          <i
            class="fa fa-user-circle"
            style={{ fontSize: "36px", border:"none" }}
          ></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
