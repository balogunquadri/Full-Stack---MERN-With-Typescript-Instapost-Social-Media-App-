import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="mycard "></div>
      <div className="card auth-card input-field">
        <h2>Instapost</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className="btn waves-effect waves-light #0d47a1 blue darken-4">
          Signup
        </button>
        <h5> Already have an account? </h5>

        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;
