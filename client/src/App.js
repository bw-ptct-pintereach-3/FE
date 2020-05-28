import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import DisplayArticles from "./components/DisplayArticles";
import NewArticleRenderer from "./components/NewArticleRenderer";

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
<<<<<<< HEAD
          <Route exact path="/home" component={UserHome} />
          <Route exact path="/add-pin" component={AddStudyForm} />
          <Route exact path="/add-board" component={Boards} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/toReadList" component={NewArticleRenderer} /> 
          <Route exact path="/displayArticles" component={DisplayArticles} />
=======
          <PrivateRoute exact path="/profile" component={UserProfile} />
          <PrivateRoute exact path="/toReadList" component={NewArticleRenderer} /> 
          <PrivateRoute exact path="/displayArticles" component={DisplayArticles} />

>>>>>>> master
        </div>
      </div>
    </Router>
  );
}
