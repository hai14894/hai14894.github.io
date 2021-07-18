import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../provider/AppProvider/App.provider";

import "./style.css";
const NavBar = () => {
  const {
    state: { cart },
  } = useAppContext();

  const totalCount = cart.reduce((acc, current) => (acc += current.count), 0);

  return (
    <div className="nav-bar">
      <Link to="/">
        <img src={`/media/logo.png`} alt="logo" />
      </Link>
      <span>Links</span>
      <span>My Cart({totalCount})</span>
    </div>
  );
};

export default NavBar;
