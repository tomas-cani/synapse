import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

import MaxExercices from './MaxExercices';
import Screen from './Screen';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
  }

  handleInput(e) {
    this.props.handleConfig(Number(e.target.value));
  }

  handleDifficultyChange(e, value) {
    this.props.handleDifficultyChange(value);
  }

  render() {
    return (
      <Screen>
        <h1>{this.props.title}</h1>
        <h2>Configure workout</h2>
        <h3># Exercises</h3>

        <MaxExercices
          onChange={this.handleInput}
          maxExercises={this.props.maxExercises}
        />
        <h3>Difficulty Level: {this.props.difficulty}</h3>
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
  maxExercises: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default StartScreen;
