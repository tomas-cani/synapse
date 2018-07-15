import React from 'react';
import PropTypes from 'prop-types';

import './Question.css';

const Question = props => (
  <div className="Question">
    {props.children}
  </div>
);

Question.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Question;
