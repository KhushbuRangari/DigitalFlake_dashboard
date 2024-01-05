import React from "react";
import Sidemenu from "../Sidemenu";

function AddCategory() {
  return (
    <Sidemenu>
      <div className="container">
        <div className="row justify-content-center" style={{ marginTop: "5%" }}>
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-fill bd-highlight">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                <h6>Category Name</h6>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div className="p-2 flex-fill bd-highlight">
              {" "}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                <h6>Decsription</h6>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div className="p-2 flex-fill bd-highlight">
              {" "}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                <h6>Status</h6>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidemenu>
  );
}

export default AddCategory;
