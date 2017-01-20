import React, { Component } from 'react';
import logo from '../logo.svg';
import NavBar from './NavBar';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Financial Calculators</h2>
        </div>
      </div>
    )
  }
}

export default App;
