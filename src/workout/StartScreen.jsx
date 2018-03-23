import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';

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
        <p>Configure workout</p>
        <TextField
          floatingLabelText="# Exercises"
          type="number"
          onChange={this.handleInput}
          value={this.props.maxExercises}
        />
        <Slider
          className="slider"
          min={1}
          max={5}
          step={1}
          value={this.props.difficulty}
          onChange={this.handleDifficultyChange}
        />
        <p>Difficulty Level: {this.props.difficulty}</p>
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
