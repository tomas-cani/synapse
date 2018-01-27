import React, { Component } from 'react';

import Element from './Element';
import periodicTable from './periodicTable';

import EndScreen from '../workout/EndScreen';
import Options from '../workout/Options';
import Score from '../workout/Score';
import { getRandomElement, fillWithRandomElements, shuffleArray } from '../shared/utils';

import './Chemistry.css';

const defaultState = {
  attempts: 0,
  correctOption: null,
  options: [],
  correctAnswers: 0,
  selectedOptionId: null,
};

class Chemistry extends Component {
  static getOptions(initialOption, optionsSource) {
    const randomOptions = fillWithRandomElements(initialOption, optionsSource, 4);
    shuffleArray(randomOptions);
    return randomOptions;
  }

  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
  }

  componentDidMount() {
    this.startWorkout();
  }

  getGameBoard() {
    return (
      <div className="game-board">
        <Element
          name={this.state.correctOption.name}
          mass={this.state.correctOption.atomic_mass}
          symbol={this.state.correctOption.symbol}
          number={this.state.correctOption.number}
          selectedOptionId={this.state.selectedOptionId}
        />
        <Options
          options={this.state.options}
          correctOption={this.state.correctOption}
          onOptionSelect={this.handleOptionSelect}
          selectedOptionId={this.state.selectedOptionId}
        />
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

  startWorkout() {
    this.setState(defaultState);
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

  handleRetry() {
    this.startWorkout();
  }

  nextQuestion() {
    const correctOption = getRandomElement(periodicTable);
    const options = Chemistry.getOptions([correctOption], periodicTable);
    this.setState({
      correctOption,
      options,
      selectedOptionId: null,
    });
  }

  render() {
    let content;
    if (this.state.attempts < 5) {
      content = this.state.correctOption ? this.getGameBoard() : '';
    } else {
      content = this.getEndScreen();
    }

    return (
      <div className="Chemistry">
        {content}
      </div>
    );
  }
}

export default Chemistry;
