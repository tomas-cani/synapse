import React from 'react';
import PropTypes from 'prop-types';

import EndScreen from './EndScreen';
import StartScreen from './StartScreen';
import SubjectData from '../workout/subjectData';
import Workout from '../workout/Workout';

import './Subject.css';

const defaultState = {
  difficulty: 1,
  maxExercises: 5,
  correctAnswers: 0,
  workoutStarted: false,
  workoutEnded: false,
};

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.subjectData = new SubjectData(this.props.subjectData, this.props.subjectDataProperties);
    this.handleConfig = this.handleConfig.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleWorkoutEnd = this.handleWorkoutEnd.bind(this);
  }

  getEndScreen() {
    return (
      <EndScreen
        attempts={this.state.maxExercises}
        correctAnswers={this.state.correctAnswers}
        onRetry={this.handleRetry}
      />
    );
  }

  getStartScreen() {
    return (
      <StartScreen
        difficulty={this.state.difficulty}
        difficultyDescription={this.props.difficultyLevels[this.state.difficulty - 1].description}
        title={this.props.name}
        onStart={this.handleStart}
        handleConfig={this.handleConfig}
        handleDifficultyChange={this.handleDifficultyChange}
        maxExercises={this.state.maxExercises}
      />
    );
  }

  getWorkout() {
    return (
      <Workout
        maxExercises={this.state.maxExercises}
        maxDataIndex={this.props.difficultyLevels[this.state.difficulty - 1].max}
        onWorkoutEnd={this.handleWorkoutEnd}
        questionComponent={this.props.questionComponent}
        subjectData={this.subjectData}
      />
    );
  }

  handleConfig(maxExercises) {
    this.setState({
      maxExercises,
    });
  }

  handleDifficultyChange(difficulty) {
    this.setState({
      difficulty,
    });
  }

  handleRetry() {
    this.resetState();
  }

  handleStart() {
    this.setState({
      workoutStarted: true,
    });
  }

  handleWorkoutEnd(correctAnswers) {
    this.setState({
      correctAnswers,
      workoutEnded: true,
    });
  }

  resetState() {
    this.setState(defaultState);
  }

  render() {
    let content;
    if (!this.state.workoutStarted) {
      content = this.getStartScreen();
    } else if (!this.state.workoutEnded) {
      content = this.getWorkout();
    } else {
      content = this.getEndScreen();
    }

    return (
      <div className="Subject container">
        {content}
      </div>
    );
  }
}

Subject.propTypes = {
  difficultyLevels: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  questionComponent: PropTypes.func.isRequired,
  subjectData: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  subjectDataProperties: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Subject;
