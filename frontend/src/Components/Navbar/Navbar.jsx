import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <Link to="./" className="link logo">
        <h1>Link</h1>
        <h1 className="muted">ed</h1>
        <h1>List</h1>
      </Link>
    </div>
  );
};

export default Navbar;
