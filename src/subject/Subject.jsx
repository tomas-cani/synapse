import React from 'react';

import Chemistry from '../chemistry/Chemistry';
import './Subject.css';

class Subject extends React.Component {
  render() {
    return (
      <main className="Subject">
        <Chemistry />
      </main>
    );
  }
}

export default Subject;
