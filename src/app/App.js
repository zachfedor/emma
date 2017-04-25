import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Wrapper from 'app/Wrapper';
import About from 'app/About';
import 'app/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="title"><Link to="/">exemplify</Link></h1>

            <nav className="header-links">
              <Link className="header-link" to="/about">about</Link>
            </nav>
          </header>

          <Route path="/" component={Wrapper} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
