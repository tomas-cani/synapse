import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'material-ui/Slider';

const DifficultyLevel = props => [
  <h3>Difficulty Level: {props.difficulty}</h3>,
  <Slider
    className="slider"
    min={1}
    max={5}
    step={1}
    value={props.difficulty}
    onChange={props.onChange}
  />,
  <p>{props.difficultyDescription}</p>,
];

DifficultyLevel.propTypes = {
  difficulty: PropTypes.number.isRequired,
  difficultyDescription: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DifficultyLevel;
