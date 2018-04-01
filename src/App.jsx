import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Sidebar from './sidebar/Sidebar';
import Chemistry from './chemistry/Chemistry';
import Geography from './geography/Geography';

import './App.css';
import './material-ui.css';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <div className="App container">
        <Sidebar />
        <Switch>
          <Route path="/chemistry" component={Chemistry} />
          <Route path="/geography" component={Geography} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
