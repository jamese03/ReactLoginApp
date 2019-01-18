import React, { Component } from 'react';
import '../App.css';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserLogin from './UserLogin';

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {createNewUser: false};
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log('here');
      return (
        <Router>
            <div>
               <Link to="/">Home</Link>
                <Route path="/" component={UserLogin} />
            </div>
        </Router>
        );
    
    }
  
    render() {
        return (
                <div className="LoginForm">
                <p>
                Please fill out form to continue
                </p>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Desired UserName:
                    <input className ="Username" 
                    type="text" />
                    </label>
                    <br/>
                    <label>
                    Create Password:
                    <input className ="Password" 
                    type="text" 
                    />
                    </label>
                    <br/>
                    <label>
                    Email:
                    <input className ="Email" 
                    type="text" 
                    />
                    </label>
                    <input className = "SubmitButton" type="submit" value="Submit" />
                </form>
                </div>
            ); 
    }
  }

export default RegisterForm;