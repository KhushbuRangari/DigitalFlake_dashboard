import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidemenu({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid">
      <button
        className="navbar-toggler bg-dark d-md-none"
        type="button"
        onClick={handleToggle}
        aria-controls="collapseTarget"
        aria-expanded={isCollapsed ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="row  justify-content-end">
        <div className={`col-3 sidebar ${isCollapsed ? "d-none d-md-block " : ""}`}>
          <ul className="nav flex-column">
            {/* <li className="nav-item">
              <Link to="/">
                <i className="fa fa-home" aria-hidden="true"></i> HOME
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/category">
                <i className="fa fa-th-large"></i> CATEGORY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product">
                <i className="fa fa-product-hunt"></i> PRODUCTS
              </Link>
            </li>
          </ul>
        </div>
        <div className={` main ${isCollapsed?"col-sm-12":"col-9"}`} >{children}</div>
      </div>
    </div>
  );
}

export default Sidemenu;
