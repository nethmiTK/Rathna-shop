import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"; // Adjust path if needed

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>

       

        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
