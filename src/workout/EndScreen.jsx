import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button';
import Score from './Score';

import './EndScreen.css';

class EndScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleRetry = this.handleRetry.bind(this);
  }

  handleRetry() {
    this.props.onRetry();
  }

  render() {
    return (
      <div className="EndScreen">
        <p>Workout has ended</p>
        <Score attempts={this.props.attempts} correctAnswers={this.props.correctAnswers} />
        <Button onClick={this.handleRetry}>Redo workout</Button>
      </div>
    );
  }
}

EndScreen.propTypes = {
  attempts: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default EndScreen;
