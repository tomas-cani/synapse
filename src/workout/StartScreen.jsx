import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Screen from './Screen';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.handleConfig(e.target.value);
  }

  render() {
    return (
      <Screen>
        <p>Configure workout</p>
        <TextField
          id="max-attempts"
          floatingLabelText="# Attempts"
          type="number"
          onChange={this.handleInput}
          value={this.props.maxAttempts}
        />
        <RaisedButton
          label="Start workout"
          onClick={this.props.onStart}
        />
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
