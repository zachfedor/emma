import React, { Component } from 'react';
import Wrapper from './Wrapper';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>emma</h2>
        </header>

        <Wrapper />
      </div>
    );
  }
}

export default App;
