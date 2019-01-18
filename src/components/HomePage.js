import React, { Component } from 'react';
import UserLogin from './UserLogin';
import { createStore } from 'redux'
import '../App.css';
import RegisterForm from './RegisterForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class HomePage extends Component {
  render() {
    return (
        <Router>
      <div>
        <div className = "Navbar">
        <Link className="App-link" to="/">Home</Link>  <Link to="/Register">Register</Link>
        </div>
        <hr />

        <Route exact path="/" component={UserLogin} />
        <Route path="/Register" component={RegisterForm} />
      </div>
    </Router>
  );

  }
}

export default HomePage;
