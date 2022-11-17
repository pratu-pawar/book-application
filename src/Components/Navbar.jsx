import React from "react";
import "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <Link to="/">
        <h1>React Books App</h1>
        </Link>
      </div>
      <div>
        <Link to="/Favorites">Your Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
