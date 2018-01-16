import React, { Component } from 'react';

import Sidebar from './sidebar/Sidebar';
import Subject from './shared/Subject';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Subject />
      </div>
    );
  }
}

export default App;
