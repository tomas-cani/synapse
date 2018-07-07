import React from 'react';
import PropTypes from 'prop-types';

import Exercise from '../workout/Exercise';
import Progress from './Progress';
import Score from '../workout/Score';

import './Workout.css';

import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';

const correctAudio = new Audio(correctSound);
const incorrectAudio = new Audio(incorrectSound);

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

    const correctAnswer = id === this.state.correctOption.id;
    if (correctAnswer) {
      correctAudio.play();
    } else {
      incorrectAudio.play();
    }

    setTimeout(() => {
      this.updateScore(id);
      this.nextQuestion();
    }, 1500);
  }

  nextQuestion() {
    if (this.state.attempts >= Number(this.props.maxExercises)) {
      this.props.onWorkoutEnd(this.state.correctAnswers);
    } else {
      const randomQuestion = this.props.subjectData.getRandomQuestion(this.props.maxDataIndex);
      this.setState({
        correctOption: randomQuestion.correctOption,
        options: randomQuestion.options,
        property: randomQuestion.property,
        selectedOptionId: null,
      });
    }
  }

  updateScore(id) {
    const correctAnswer = id === this.state.correctOption.id;
    this.setState({
      attempts: this.state.attempts + 1,
      correctAnswers: correctAnswer ? this.state.correctAnswers + 1 :
        this.state.correctAnswers,
    });
  }

  render() {
    const Question = this.props.questionComponent;
    return this.state.correctOption ? (
      <div className="container vertical">
        <Exercise
          options={this.state.options}
          correctOption={this.state.correctOption}
          onOptionSelect={this.handleOptionSelect}
          property={this.state.property}
          selectedOptionId={this.state.selectedOptionId}
        >
          <div className="question-container">
            <Question
              data={this.state.correctOption}
              property={this.state.property}
              selectedOptionId={this.state.selectedOptionId}
            />
          </div>
        </Exercise>
        <Score attempts={this.state.attempts} correctAnswers={this.state.correctAnswers} />
        <Progress
          maxExercises={this.props.maxExercises}
          attempts={this.state.attempts}
        />
      </div>
    ) : '';
  }
}

Workout.propTypes = {
  maxExercises: PropTypes.number.isRequired,
  maxDataIndex: PropTypes.number.isRequired,
  onWorkoutEnd: PropTypes.func.isRequired,
  questionComponent: PropTypes.func.isRequired,
  subjectData: PropTypes.shape({
    getOptions: PropTypes.func.isRequired,
    getRandomQuestion: PropTypes.func.isRequired,
  }).isRequired,
};

export default Workout;
