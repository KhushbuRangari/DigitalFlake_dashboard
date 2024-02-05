import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../serverConnection";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Sidemenu from "../Sidemenu";
import { useAuthContext } from "../context/AuthContext";

function Category() {
  const [category, setCategory] = useState({ getCatData: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const token = auth.user.token;
        const response = await axios.get(`${BASE_URL}/category/api/getAll`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategory(response.data);
      } catch (error) {
        toast("Something went wrong with fetching categories");
        console.error(error);
      }
    };
    getAllCategories();
  }, [auth.user.token]);

  const filteredCategories = category.getCatData.filter((item) =>
    item.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    navigate("/addCategory");
  }

  return (
    <Sidemenu>
      <div className="container my-3">
        <div className="row">
          <div className="col-6">
            <i className="fa fa-th-large"></i>
            <h4>Category</h4>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={handleChange}
                className="form-control"
                placeholder="Search by category name"
                aria-label="search"
              />
            </div>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={handleClick}>
              Add New
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{item.categoryName}</td>
                    <td>{item.categoryDescription}</td>
                    <td style={{ color: item.status === "true" ? "green" : "red" }}>
                      {item.status === "true" ? "Active" : "Inactive"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Sidemenu>
  );
}

export default Category;
