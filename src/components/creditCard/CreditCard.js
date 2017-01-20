import React from 'react';
import Form from './Form';
import NavBar from '../NavBar';
import logo from '../../logo.svg';

export default () => (
  <div>
    <div className="App">
      <NavBar />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="header">Welcome to Financial Calculators</h2>
      </div>
    </div>
    <Form className= "four columns"/>
  </div>
)
