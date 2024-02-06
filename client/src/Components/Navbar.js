import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const auth = useAuthContext();
  function hangleLogout(e) {
    auth.logout(true);
  toast("You are logged out.")
  }

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand navbar-light w-100 ">
      <Link className="navbar-brand" to={`${auth.isLogged?"/category":"/"}`}>
        <i
          className="fa fa-dashcube"
          style={{ color: "white", border: "none" }}
        >
          Digitalflake
        </i>
      </Link>
  
      <div
        className="collapse d-flex justify-content-end navbar-collapse"
        id="navbarSupportedContent"
      >
        {auth.isLogged ? (
          <button
            className="btn btn-outline-light  my-2 my-sm-0"
            type="submit"
            onClick={hangleLogout}
          >
            <i
              className="fa fa-sign-out"
              style={{ fontSize: "25px", border: "none" }}
            >
              Logout
            </i>
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar;
