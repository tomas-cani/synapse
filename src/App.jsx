import React, { Component } from 'react';

import Chemistry from './chemistry/Chemistry';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="game">
          <Chemistry />
        </div>
      </div>
    );
  }
}

export default App;
