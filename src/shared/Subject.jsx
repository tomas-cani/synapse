import React from 'react';
import PropTypes from 'prop-types';

import Chemistry from '../chemistry/Chemistry';
import './Subject.css';

class Subject extends React.Component {
  render() {
    return (
      <div className="Subject">
        <Chemistry />
      </div>
    );
  }
}

export default Subject;
