import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Sidebar from './sidebar/Sidebar';
import Chemistry from './chemistry/Chemistry';

import './App.css';
import './material-ui.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App container">
            <Sidebar />
            <Switch>
              <Route path="/chemistry" component={Chemistry} />
            </Switch>
          </div>
          <Redirect to="/chemistry" />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
