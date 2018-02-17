import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button';
import Screen from './Screen';
import Input from '../shared/Input';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(value) {
    this.props.handleConfig(value);
  }

  render() {
    return (
      <Screen>
        <p>Configure workout</p>
        <label htmlFor="max-attempts">
          # Attempts
          <Input
            id="max-attempts"
            type="number"
            onInput={this.handleInput}
            value={this.props.maxAttempts}
          />
        </label>

        <Button onClick={this.props.onStart} value="Start workout" />
      </Screen>
    );
  }
}

StartScreen.propTypes = {
  handleConfig: PropTypes.func.isRequired,
  maxAttempts: PropTypes.string.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default StartScreen;
