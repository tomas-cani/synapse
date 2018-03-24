import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import Screen from './Screen';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
  }

  handleInput(e) {
    this.props.handleConfig(e.target.value);
  }

  handleDifficultyChange(e, value) {
    this.props.handleDifficultyChange(value);
  }

  render() {
    return (
      <Screen>
        <h1>Configure workout</h1>
        <h2># Exercises</h2>

        <RadioButtonGroup
          className=""
          name="maxExercises"
          defaultSelected="not_light"
          onChange={this.handleInput}
          valueSelected={this.props.maxExercises}
        >
          <RadioButton value="5" label="5" className="radio" />
          <RadioButton value="10" label="10" className="radio" />
          <RadioButton value="20" label="20" className="radio" />
        </RadioButtonGroup>
        <h2>Difficulty Level: {this.props.difficulty}</h2>
        <Slider
          className="slider"
          min={1}
          max={5}
          step={1}
          value={this.props.difficulty}
          onChange={this.handleDifficultyChange}
        />
        <p>{this.props.difficultyDescription}</p>
        <RaisedButton label="Start workout" onClick={this.props.onStart} />
      </Screen>
    );
  }
}

StartScreen.propTypes = {
  difficulty: PropTypes.number.isRequired,
  difficultyDescription: PropTypes.string.isRequired,
  handleConfig: PropTypes.func.isRequired,
  handleDifficultyChange: PropTypes.func.isRequired,
  maxExercises: PropTypes.string.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default StartScreen;
