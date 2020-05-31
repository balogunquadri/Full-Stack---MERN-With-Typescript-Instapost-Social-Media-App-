import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

interface IUser {
  name: string;
  password: string;
  email: string;
}
const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // const uploadFields = ()=>{
  //   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
  //       M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
  //       return
  //   }

  const PostData = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        password,
        email
        // pic:url
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" });
          history.push("/signin");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="mycard "></div>
      <div className="card auth-card input-field">
        <h2>Instapost</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #0d47a1 blue darken-4"
          onClick={() => PostData()}
        >
          Signup
        </button>
        <h5> Already have an account? </h5>

        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;
