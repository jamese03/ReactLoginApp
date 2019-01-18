import React, { Component } from 'react';
import '../App.css';
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class UserLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUserChange(event) {
      this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
      this.setState({password: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.username);
      console.log('A password was submitted as ' + this.state.password);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="LoginForm">
         <p>
           Please enter Login Credentials to continue
         </p>
          <form onSubmit={this.handleSubmit}>
          <label>
              UserName:
              <input className ="Username" 
              type="text" 
              value={this.state.username} 
              onChange={this.handleUserChange} 
              name ="UserNameBox"/>
            </label>
            <br/>
            <label>
              Password:
              <input className ="Password" 
              type="text" 
              value={this.state.password} 
              onChange={this.handlePasswordChange} 
              name = "PasswordBox"
              />
            </label>
            <input className = "SubmitButton" type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

export default UserLogin;