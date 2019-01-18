import React, { Component } from 'react';
import '../App.css';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegisterForm from './RegisterForm';

class NewUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleNewUser = this.handleNewUser.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }

    handleNewUser() {

    }
      
    render() {
    return (
        <Router>
            <div>
                <p>If you would like to register as a new user click</p> <Link to="/register">Register</Link>
                <Route path="/register" component={RegisterForm} />
            </div>
        </Router>
        );
    }
  }

export default NewUser;