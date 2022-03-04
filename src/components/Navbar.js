import React from "react";
import "./Navbar.css";
import logo from "../components/assets/logo.svg";

const navbar = () => {
  return (
    <div className="container">
      <img className="logo" src={logo} />
    </div>
  );
};

export default navbar;
