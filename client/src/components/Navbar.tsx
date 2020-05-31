import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Instapost
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/" className="brand">
              Home
            </Link>
          </li>
          <li>
            <Link to="/createpost" className="brand">
              Add Post
            </Link>
          </li>
          <li>
            <Link to="/signin" className="brand">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="brand">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/profile" className="brand">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
