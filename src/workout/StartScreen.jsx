import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button';
import Screen from './Screen';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.props.onStart();
  }

  render() {
    return (
      <Screen>
        <p>Configure workout</p>
        <Button onClick={this.handleStart}>Start workout</Button>
      </Screen>
    );
  }
}

StartScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default StartScreen;
