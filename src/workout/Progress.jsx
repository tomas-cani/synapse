import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from 'material-ui/LinearProgress';

import './Progress.css';

const Progress = props => (
  <LinearProgress
    className="Progress"
    mode="determinate"
    max={props.maxExercises}
    value={props.attempts}
  />
);

Progress.propTypes = {
  attempts: PropTypes.number.isRequired,
  maxExercises: PropTypes.number.isRequired,
};

export default Progress;
