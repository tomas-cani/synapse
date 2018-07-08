import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

import MaxExercices from './MaxExercices';
import DifficultyLevel from './DifficultyLevel';
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
        <DifficultyLevel
          difficulty={this.props.difficulty}
          difficultyDescription={this.props.difficultyDescription}
          onChange={this.handleDifficultyChange}
        />
        <RaisedButton label="Start workout" primary onClick={this.props.onStart} />
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
