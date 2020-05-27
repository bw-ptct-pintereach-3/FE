import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddStudyForm from "./components/AddStudyForm";
import Boards from "./components/Boards";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";

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
          <Route exact path="/home" component={UserHome} />
          <Route exact path="/add-pin" component={AddStudyForm} />
          <Route exact path="/add-board" component={Boards} />
          <Route exact path="/profile" component={UserProfile} />
        </div>
      </div>
    </Router>
  );
}
