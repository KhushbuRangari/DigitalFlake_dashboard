import React, { useState } from "react";
import Sidemenu from "../Sidemenu";
import BASE_URL from "../../serverConnection";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { useCatContext } from "../context/CategoryContext";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const auth = useAuthContext();
  const category = useCatContext();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    packSize: "",
    price: "",
    imgURL: null, // Initialize imgURL as null
    status: "",
    category: "",
  });
  if (!auth.isLogged) {
    navigate("/");
    return null; // Return null if user is not logged in
  }

  const catName = category.category.getCatData.map((item) => ({
    name: item.categoryName,
    id: item._id,
  }));



  const handleDropdown = (e) => {
    setProduct((prev) => ({
      ...prev,
      category: e.target.value, // Update category directly in state
    }));
  };

  const handleImg = (e) => {
    setProduct((prev) => ({
      ...prev,
      imgURL: e.target.files[0], // Update imgURL with the selected file
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value, // Update other input fields
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);

    try {
      const token = auth.user.token;
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("packSize", product.packSize);
      formData.append("price", product.price);
      formData.append("imgURL", product.imgURL);
      formData.append("status", product.status);
      formData.append("category", product.category);

      const response = await axios.post(`${BASE_URL}/product/api/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Set content type as multipart form data
        },
      });
      alert("Product added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sidemenu>
      <div className="container shadow" style={{ width: "40%", padding: "3%", marginTop: "8%" }}>
        <h2 className="my-3">Add Product</h2>
        <hr />
        <div className="row justify-content-center" style={{ marginTop: "5%" }}>
          <div className="d-flex bd-highlight">
            <form onSubmit={handleSubmit}>
              {/* Input fields */}
              {/* Dropdown for selecting category */}
              <div className="d-flex form-group">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Category
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {catName.map((item, key) => (
                      <button
                        className="dropdown-item"
                        key={key}
                        value={item.id}
                        onClick={handleDropdown}
                        type="button"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="form-control mx-3 w-100"
                  id="Name"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div className="d-flex form-group">
                <label htmlFor="packSize">Pack Size</label>
                <input
                  type="text"
                  name="packSize"
                  value={product.packSize}
                  onChange={handleChange}
                  className="form-control mx-3 w-100"
                  id="packSize"
                  placeholder="Enter pack size"
                  required
                />
              </div>
              <div className="d-flex form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="form-control mx-3"
                  id="price"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="d-flex form-group">
                <label htmlFor="imgURL">Image</label>
                <input
                  type="file"
                  name="imgURL"
                  onChange={handleImg}
                  className="form-control mx-3"
                  id="imgURL"
                  required
                />
              </div>
              <div className="d-flex form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  name="status"
                  value={product.status}
                  onChange={handleChange}
                  className="form-control mx-3"
                  id="status"
                  placeholder="Enter status"
                  required
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

export default AddProduct;
