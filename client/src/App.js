import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import DisplayArticles from "./components/DisplayArticles";
import AddStudyForm from "./components/AddStudyForm";
import UserHome from "./components/UserHome";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
        <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={UserProfile} />
          <PrivateRoute exact path="/home" component={UserHome} />
          <PrivateRoute exact path="/add-pin" component={AddStudyForm} />
          <PrivateRoute exact path="/displayArticles" component={DisplayArticles} />
        </div>
      </div>
    </Router>
  );
}
