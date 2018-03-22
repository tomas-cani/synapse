import React from 'react';
import PropTypes from 'prop-types';

import Element from '../chemistry/Element';
import Exercise from '../workout/Exercise';
import Score from '../workout/Score';

class Workout extends React.Component {
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

    const randomQuestion = this.props.subjectData.getRandomQuestion(this.props.maxDataIndex);
    this.setState({
      correctOption: randomQuestion.correctOption,
      options: randomQuestion.options,
      property: randomQuestion.property,
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
          property={this.state.property}
          selectedOptionId={this.state.selectedOptionId}
        >
          <Element
            name={this.state.correctOption.name}
            mass={this.state.correctOption.atomic_mass}
            symbol={this.state.correctOption.symbol}
            number={this.state.correctOption.number}
            property={this.state.property}
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
  maxDataIndex: PropTypes.number.isRequired,
  onWorkoutEnd: PropTypes.func.isRequired,
  subjectData: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default Workout;
