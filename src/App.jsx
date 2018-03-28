import React, { Component } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Sidebar from './sidebar/Sidebar';
import Subject from './subject/Subject';

import './App.css';
import './material-ui.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App container">
            <Sidebar />
            <Subject />
          </div>
          <Redirect to="/chemistry" />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
