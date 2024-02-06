import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../serverConnection";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Sidemenu from "../Sidemenu";
import { useAuthContext } from "../context/AuthContext";

function Product() {
  const auth = useAuthContext();
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      const token = auth.user && auth.user.token;

      try {
        if (auth.isLogged) {
          const response = await axios.get(`${BASE_URL}/product/api/getAll`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProduct(response.data.getProdData);
        } else {
          navigate("/");
        }
      } catch (error) {
        toast("Something went wrong with getting Products");
        console.error(error.response.data.message);
      }
    };
    getAllProducts();
  }, [auth.user, navigate]);

  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    navigate("/addProduct");
  }

  return (
    <Sidemenu>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h4>
              <i className="fa fa-product-hunt"></i> Products
            </h4>
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
                placeholder="Search by product name"
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
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Size</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.packSize}</td>
                    <td>
                      <img
                        src={`${BASE_URL}/${item.imgURL}`}
                        alt="Product"
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{item.price}</td>
                    <td
                      style={{
                        color: item.status === "true" ? "green" : "red",
                      }}
                    >
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

export default Product;
