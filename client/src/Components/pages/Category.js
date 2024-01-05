import React, { useEffect, useState } from "react";
import { useCatContext } from "../../Components/context/CategoryContext";
import axios from "axios";
import BASE_URL from "../../serverConnection";
import { toast } from "react-toastify";

function Category() {
  const [category, setCategory] = useState({ getCatData: [] });

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/category/api/getAll`);
        setCategory(response.data);
      } catch (error) {
        toast("Something went wrong with fetching categories");
        console.error(error);
      }
    };
    getAll();
  }, []);

  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Add logic for handling form submission
  }

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
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
              onChange={handleChange}
              className="form-control"
              aria-label="search"
            />
          </div>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleSubmit}>
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
              {category.getCatData.map((item, key) => (
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{item.categoryName}</td>
                  <td>{item.description}</td>
                  <td style={{color:item.status==="true"?"green":"red"}}>{item.status==="true"?"Active":"Inactive"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Category;
