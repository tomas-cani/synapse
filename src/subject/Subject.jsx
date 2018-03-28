import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Chemistry from '../chemistry/Chemistry';
import './Subject.css';

class Subject extends React.Component {
  render() {
    return (
      <main className="Subject">
        <Switch>
          <Route path="/chemistry" component={Chemistry} />
        </Switch>
      </main>
    );
  }
}

export default Subject;
