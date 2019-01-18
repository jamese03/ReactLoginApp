import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('here');
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }

  render() {
    return (
      <div className = "Navbar">
        <ul>
            <li onClick={this.handleClick}>
                {this.state.toggle ? 'ON' : 'OFF'}
            </li>
          </ul>
      </div>
    );
  }
}

export default NavBar;
