import React, { Component } from 'react';

import Element from './Element';
import periodicTable from './periodicTable';

import Options from '../shared/Options';
import Score from '../shared/Score';
import { getRandomElement, fillWithRandomElements, shuffleArray } from '../shared/utils';

import './Chemistry.css';

class Chemistry extends Component {
  static getOptions(initialOption, optionsSource) {
    const randomOptions = fillWithRandomElements(initialOption, optionsSource, 4);
    shuffleArray(randomOptions);
    return randomOptions;
  }

  constructor(props) {
    super(props);
    this.state = {
      attempts: 0,
      correctOption: null,
      options: [],
      correctAnswers: 0,
      selectedOptionId: null,
    };
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
  }

  componentDidMount() {
    this.nextQuestion();
  }

  getGameBoard() {
    return (
      <div className="Chemistry">
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
    this.updateScore(id);
    setTimeout(() => {
      this.nextQuestion();
    }, 1500);
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
    const gameBoard = this.state.correctOption ? this.getGameBoard() : '';
    return gameBoard;
  }
}

export default Chemistry;
