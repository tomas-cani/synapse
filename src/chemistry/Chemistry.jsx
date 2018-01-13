import React, { Component } from 'react';

import Element from './Element';
import periodicTable from './periodicTable';

import Options from '../shared/Options';
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
      correctOption: null,
      options: [],
      selectedOptionId: null,
    };
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
  }

  componentDidMount() {
    this.nextQuestion();
  }

  getGameBoard() {
    return (
      <div className="game-board">
        <Element name={this.state.correctOption.name} symbol={this.state.correctOption.symbol} />
        <Options
          options={this.state.options}
          correctOption={this.state.correctOption}
          onOptionSelect={this.handleOptionSelect}
          selectedOptionId={this.state.selectedOptionId}
        />
      </div>
    );
  }

  handleOptionSelect(id) {
    this.setState({
      selectedOptionId: id,
    });
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
