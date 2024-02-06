import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import BASE_URL from "../../serverConnection";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/user/api/forgotPassword`, { email });
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col shadow " style={{ padding: "5%", marginTop: "6%" }}>
          <span>
            <img
              src="/image_289.png"
              alt=""
              style={{ width: "160px", height: "120px" }}
            />
            <h5>Welcome to Digitalflake Admin</h5>
          </span>
          <>
            <div style={{ width: "100%" }}>
              <div
                className="form-group "
                style={{ marginBottom: "20px", width: "100%" }}
              >
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            src="admin.jpg"
            alt=""
            style={{ width: "80%", height: "80%", margin: "15%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
