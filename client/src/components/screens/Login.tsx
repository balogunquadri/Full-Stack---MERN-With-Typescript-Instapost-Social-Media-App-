import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="mycard "></div>
      <div className="card auth-card input-field">
        <h2>Instapost</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className="btn waves-effect waves-light #0d47a1 blue darken-4">
          Login
        </button>
        <h5>New User? </h5>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
