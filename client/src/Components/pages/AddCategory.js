import React, { useState } from "react";
import Sidemenu from "../Sidemenu";
import axios from "axios";
import BASE_URL from "../../serverConnection";
import { useAuthContext } from "../context/AuthContext";

function AddCategory() {

  const auth = useAuthContext();

  const [cat, setCat] = useState({});
  const handleChange = (e) => {
    setCat((prv) => {
      return { ...prv, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cat);

    try {
      const token =auth.user.token;
      const response = await axios.post(`${BASE_URL}/category/api/add`, cat,{
        headers:{
          Authorization:`Bearar ${token}`
        }
      });
      alert("Category added successfully");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <Sidemenu>
      <div className="container shadow " style={{width:"40%",padding:"3%",marginTop:"8%"}}>
      <h2 className="my-3">Add Category</h2> <hr />
        <div className="row justify-content-center" style={{ marginTop: "5%" }}>
        

         <div className="d-flex bd-highlight">
         <form onSubmit={handleSubmit}>
            <div className=" d-flex  form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="Name"
                name="name"
                onChange={handleChange}
                className="form-control mx-3 w-100"
                id="Name"
                aria-describedby="Name"
                placeholder="Enter email"
              />
            </div>
            <div className="d-flex  form-group">
              <label htmlFor="Description">Description</label>
              <input
                type="Description"
                name="description"
                onChange={handleChange}
                className="form-control mx-3"
                id="Description"
                placeholder="Description"
              />
            </div>
            <div className="d-flex form-group">
              <label htmlFor="status">Status </label>
              <input
                type="status"
                name="status"
                onChange={handleChange}
                className="form-control mx-3"
                id="status"
                placeholder="status"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
         </div>

      
        </div>
      </div>
    </Sidemenu>
  );
}

export default AddCategory;
