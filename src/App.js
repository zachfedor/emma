import React, { Component } from 'react';
import Story from './Story';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>emma</h2>
        </header>

        <Story />
        <p>cardlist for rules</p>
        <p>cardlist for questions</p>
      </main>
    );
  }
}

export default App;
