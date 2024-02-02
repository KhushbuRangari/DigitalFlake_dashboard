import React from 'react'
import { Link } from 'react-router-dom'

function Sidemenu({children}) {
  return (
    <div className="container-fluid">
    <div className="row d-flex justify-content">
    <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav flex-column">
      
        <li className="nav-item "><Link >HOME</Link></li>
        <li className="nav-item"><Link to='/category' ><i className="fa fa-th-large"></i> CATEGORY</Link></li>
        <li className="nav-item"><Link to='/product' > <i className="fa fa-box"></i> PRODUCTS</Link></li>
        </ul>
    </div>
  <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={{marginLeft:"15%"}}>
    <div className="">{children}</div>

    </div>
    </div>
    </div>
  )
}

export default Sidemenu