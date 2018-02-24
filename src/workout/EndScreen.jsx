import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Score from './Score';
import Screen from './Screen';

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
      <Screen>
        <p>Workout has ended</p>
        <Score attempts={this.props.attempts} correctAnswers={this.props.correctAnswers} />
        <RaisedButton onClick={this.handleRetry} label="Redo workout" />
      </Screen>
    );
  }
}

EndScreen.propTypes = {
  attempts: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default EndScreen;
