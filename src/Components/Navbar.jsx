import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
  <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container ">
    <Link className="navbar-brand fw-bold fs-3" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent" >
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/products">product</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/products">About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="cart mx-4">
          <span href='/' className="btn btn-outline-light"><i className="fas fa-shopping-cart"></i> Cart</span>
      </div>
    </div>
  </div>
</nav>

  </>
  );
}
// style={{border:"2px solid red"}}
export default Navbar;
