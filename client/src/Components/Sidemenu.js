import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidemenu({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content">
        <button
          className="navbar-toggler bg-dark"
          type="button"
          onClick={handleToggle}
          aria-controls="collapseTarget"
          aria-expanded={isCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`col-sm-3 col-md-2 sidebar ${isCollapsed ? "collapse" : ""}`}
          id="collapseTarget"
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/">
                <i className="fa fa-home" aria-hidden="true"></i> HOME
              </Link>
            </li>
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
        <div
          className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
          style={{ marginLeft: "15%" }}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
