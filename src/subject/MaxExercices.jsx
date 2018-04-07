import React from 'react';
import PropTypes from 'prop-types';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const MaxExercices = props => (
  <RadioButtonGroup
    className=""
    name="maxExercises"
    defaultSelected="not_light"
    onChange={props.onChange}
    valueSelected={props.maxExercises}
  >
    <RadioButton value={5} label="5" className="radio" />
    <RadioButton value={10} label="10" className="radio" />
    <RadioButton value={20} label="20" className="radio" />
  </RadioButtonGroup>
);

MaxExercices.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxExercises: PropTypes.number.isRequired,
};

export default MaxExercices;
