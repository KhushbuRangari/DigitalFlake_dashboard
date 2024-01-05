import React from 'react'
import { Link } from 'react-router-dom'

function Sidemenu({children}) {
  return (
    <div class="container-fluid">
    <div class="row d-flex justify-content">
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav flex-column">
      
        <li class="nav-item "><Link >HOME</Link></li>
        <li class="nav-item"><Link to='/category' ><i class="fa fa-th-large"></i> CATEGORY</Link></li>
        <li class="nav-item"><Link to='/product' > <i class="fa fa-box"></i> PRODUCTS</Link></li>
        </ul>
    </div>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" style={{marginLeft:"15%"}}>
    <div class="">{children}</div>

    </div>
    </div>
    </div>
  )
}

export default Sidemenu