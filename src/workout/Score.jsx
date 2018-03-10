import React from 'react';
import PropTypes from 'prop-types';

class Score extends React.Component {
  percentage() {
    const percentage = (this.props.correctAnswers / this.props.attempts) * 100;
    return Number.isNaN(percentage) ? 0 : percentage.toFixed(0);
  }

  render() {
    return (
      <div className="Score container">
        <p>{this.props.correctAnswers} / {this.props.attempts} ({this.percentage()}%)</p>
      </div>
    );
  }
}

Score.propTypes = {
  attempts: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
};

export default Score;
