import React, { Component } from 'react';

import periodicTable from './periodicTable';

import EndScreen from '../workout/EndScreen';
import StartScreen from '../workout/StartScreen';
import Workout from '../workout/Workout';
import SubjectData from '../workout/subjectData';

import './Chemistry.css';

const defaultState = {
  difficulty: 1,
  maxExercises: '5',
  correctAnswers: 0,
  workoutStarted: false,
  workoutEnded: false,
};

const difficultyLevels = [
  {
    description: 'First 2 periods of the periodic table. 10 elements',
    max: 10,
  },
  {
    description: 'First 3 periods of the periodic table. 18 elements',
    max: 18,
  },
  {
    description: 'First 4 periods of the periodic table. 36 elements',
    max: 36,
  },
  {
    description: 'First 6 periods of the periodic table. 86 elements',
    max: 86,
  },
  {
    description: 'All periods of the periodic table. 118 elements',
    max: 118,
  },
];

class Chemistry extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.subjectData = new SubjectData(periodicTable, ['id', 'name', 'number']);
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
        difficultyDescription={difficultyLevels[this.state.difficulty - 1].description}
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
        maxDataIndex={difficultyLevels[this.state.difficulty - 1].max}
        onWorkoutEnd={this.handleWorkoutEnd}
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
      <div className="Chemistry container">
        {content}
      </div>
    );
  }
}

export default Chemistry;
