import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
// import { Router, RouteComponentProps } from "@reach/router";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
