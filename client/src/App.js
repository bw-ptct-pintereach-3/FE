import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddArticle from "./components/AddArticle";
import Board from "./components/ArticleBoard";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";

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
          <PrivateRoute exact path="/home" component={ArticleBoard} />
          <PrivateRoute exact path="/add-pin" component={AddStudyForm} />
          <PrivateRoute exact path="/add-board" component={Boards} />
        </div>
      </div>
    </Router>
  );
}
