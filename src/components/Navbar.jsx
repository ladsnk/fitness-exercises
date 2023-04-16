import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="./Logo.png" alt="logo" className="navbar__logo" />
      </Link>
      <div className="navbar__links">
        <Link className="navbar__home" to="/">
          Home
        </Link>
        <a href="#exercises">Exercises</a>
      </div>
    </div>
  );
};

export default Navbar;
