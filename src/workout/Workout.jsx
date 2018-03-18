import React from 'react';
import PropTypes from 'prop-types';

import Element from '../chemistry/Element';
import Exercise from '../workout/Exercise';
import Score from '../workout/Score';

import { getRandomElement, fillWithRandomElements, shuffleArray } from '../shared/utils';

class Workout extends React.Component {
  static getOptions(initialOption, optionsSource) {
    const randomOptions = fillWithRandomElements(initialOption, optionsSource, 4);
    shuffleArray(randomOptions);
    return randomOptions;
  }

  constructor() {
    super();
    this.state = {
      attempts: 0,
      correctAnswers: 0,
      correctOption: null,
      selectedOptionId: null,
      options: [],
    };
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
  }

  componentDidMount() {
    this.nextQuestion();
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

  nextQuestion() {
    if (this.state.attempts >= Number(this.props.maxAttempts)) {
      this.props.onWorkoutEnd(this.state.correctAnswers);
    }

    const correctOption =
      getRandomElement(this.props.periodicTable, this.props.maxRandomElement);
    const options = Workout.getOptions([correctOption], this.props.periodicTable);
    this.setState({
      correctOption,
      options,
      selectedOptionId: null,
    });
  }

  updateScore(id) {
    this.setState({
      attempts: this.state.attempts + 1,
      correctAnswers: id === this.state.correctOption.id ? this.state.correctAnswers + 1 :
        this.state.correctAnswers,
    });
  }

  render() {
    return this.state.correctOption ? (
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
    ) : '';
  }
}

Workout.propTypes = {
  maxAttempts: PropTypes.string.isRequired,
  maxRandomElement: PropTypes.number.isRequired,
  onWorkoutEnd: PropTypes.func.isRequired,
  periodicTable: PropTypes.array.isRequired,
};

export default Workout;
