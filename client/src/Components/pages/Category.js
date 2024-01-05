import React, { useState } from 'react'
import getAll from "../../Components/hooks/useCategory"
function Category() {

    const [item,setItem]=useState("")

        function handleChange(e) {
            setItem({
                ...item,
                [e.target.name]:e.target.value
            })
        }
   console.log(getAll);
  return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                <i class="fa fa-th-large"></i>
                    <h4>Category</h4>
                </div>
                <div className="col">

                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" name='serach' onChange={handleChange} className="form-control" aria-label=" searach" />
                    </div>

                </div>
                <div className="col">
                    <button className='btn btn-primary'>Add New</button>
                </div>
            </div>
            <div className="row"></div>
        </div>
  )
}

export default Category