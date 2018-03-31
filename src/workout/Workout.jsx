import React from 'react';
import PropTypes from 'prop-types';

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
    if (this.state.attempts >= Number(this.props.maxExercises)) {
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
    const Question = this.props.questionComponent;
    return this.state.correctOption ? (
      <div className="game-board container vertical">
        <Exercise
          options={this.state.options}
          correctOption={this.state.correctOption}
          onOptionSelect={this.handleOptionSelect}
          property={this.state.property}
          selectedOptionId={this.state.selectedOptionId}
        >
          <Question
            data={this.state.correctOption}
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
  maxExercises: PropTypes.number.isRequired,
  maxDataIndex: PropTypes.number.isRequired,
  onWorkoutEnd: PropTypes.func.isRequired,
  questionComponent: PropTypes.func.isRequired,
  subjectData: PropTypes.object.isRequired,
};

export default Workout;
