import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <div className="logo">
        
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
