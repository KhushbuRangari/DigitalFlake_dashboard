import React, { useState } from "react";

import { useAuthContext } from "../../Components/context/AuthContext";

function Home() {
  const [login, setLogin] = useState({});
  const[user,setUser]=useState([]);
  const auth = useAuthContext();

  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
   
  }

function handleSubmit(e) {
    e.preventDefault();
    auth.login(login); 
}


  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6 shadow"
          style={{ padding: "5%", marginTop: "6%" }}
        >
          <span>
            <img
              src="/image_289.png"
              alt=""
              style={{ width: "160px", height: "150px" }}
            />
            <h5>Welcome to Digitalflake Admin</h5>
          </span>
          <>
            <div style={{ width: "100%" }}>
              <div
                className="form-group "
                style={{ marginBottom: "20px", width: "100%" }}
              >
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  style={{
                    width: "100%",
                    border: "1px solid rgb(168, 166, 166)",
                  }}
                />
              </div>
              <div className="form-group " style={{ marginBottom: "12px" }}>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  style={{
                    width: "100%",
                    border: "1px solid rgb(168, 166, 166)",
                  }}
                />
              </div>
              <div className="d-flex justify-content-end" style={{marginBottom:"5px"}}>
                <a href="">Forgot Password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "rgb(138, 17, 138)", width: "100%" }}
                onClick={handleSubmit}
              >
                <h5 className="text-white">Log In</h5>
              </button>
            </div>
          
          </>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default Home;
