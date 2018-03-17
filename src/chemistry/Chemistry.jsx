import React, { Component } from 'react';

import Element from './Element';
import periodicTable from './periodicTable';

import EndScreen from '../workout/EndScreen';
import StartScreen from '../workout/StartScreen';
import Exercise from '../workout/Exercise';
import Score from '../workout/Score';
import { getRandomElement, fillWithRandomElements, shuffleArray } from '../shared/utils';

import './Chemistry.css';

const defaultState = {
  attempts: 0,
  difficulty: 1,
  maxAttempts: '5',
  correctAnswers: 0,
  correctOption: null,
  workoutStarted: false,
  options: [],
  selectedOptionId: null,
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
  static getOptions(initialOption, optionsSource) {
    const randomOptions = fillWithRandomElements(initialOption, optionsSource, 4);
    shuffleArray(randomOptions);
    return randomOptions;
  }

  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleConfig = this.handleConfig.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  getGameBoard() {
    return (
      <div className="game-board container vertical">
        <Exercise
          options={this.state.options}
          correctOption={this.state.correctOption}
          onOptionSelect={this.handleOptionSelect}
          selectedOptionId={this.state.selectedOptionId}
        >
          <Element
            name={this.state.correctOption.name}
            mass={this.state.correctOption.atomic_mass}
            symbol={this.state.correctOption.symbol}
            number={this.state.correctOption.number}
            selectedOptionId={this.state.selectedOptionId}
          />
        </Exercise>
        <Score attempts={this.state.attempts} correctAnswers={this.state.correctAnswers} />
      </div>
    );
  }

  getEndScreen() {
    return (
      <EndScreen
        attempts={this.state.attempts}
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
        maxAttempts={this.state.maxAttempts}
      />
    );
  }

  startWorkout() {
    this.setState({
      workoutStarted: true,
    });
    this.nextQuestion();
  }

  updateScore(id) {
    this.setState({
      attempts: this.state.attempts + 1,
      correctAnswers: id === this.state.correctOption.id ? this.state.correctAnswers + 1 :
        this.state.correctAnswers,
    });
  }

  handleOptionSelect(id) {
    this.setState({
      selectedOptionId: id,
    });
    setTimeout(() => {
      this.updateScore(id);
      this.nextQuestion();
    }, 1500);
  }

  handleConfig(maxAttempts) {
    this.setState({
      maxAttempts,
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
    this.startWorkout();
  }

  nextQuestion() {
    const correctOption =
      getRandomElement(periodicTable, difficultyLevels[this.state.difficulty - 1].max);
    const options = Chemistry.getOptions([correctOption], periodicTable);
    this.setState({
      correctOption,
      options,
      selectedOptionId: null,
    });
  }

  resetState() {
    this.setState(defaultState);
  }

  render() {
    let content;
    if (!this.state.workoutStarted) {
      content = this.getStartScreen();
    } else if (this.state.attempts < Number(this.state.maxAttempts)) {
      content = this.state.correctOption ? this.getGameBoard() : '';
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
