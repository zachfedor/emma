import React, { Component } from 'react';
import Wrapper from './Wrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title"><a href="#">emma</a></h1>
          <a className="header-link" href="#">about</a>
        </header>

        <Wrapper />
      </div>
    );
  }
}

export default App;
