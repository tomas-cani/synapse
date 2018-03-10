import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Sidebar from './sidebar/Sidebar';
import Subject from './shared/Subject';

import './App.css';
import './material-ui.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App container">
          <Sidebar />
          <Subject />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
