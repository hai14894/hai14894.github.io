import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img src={`/media/logo.png`} alt="logo" />
      </Link>
      <span>Links</span>
      <span>My Cart</span>
    </div>
  );
};

export default NavBar;
