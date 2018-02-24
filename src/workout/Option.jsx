import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

import './Option.css';

class Option extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  getClasses() {
    const showResult = this.props.selectedOptionId;
    const isSelectedOptionClass = this.props.selectedOptionId === this.props.id ? 'selected' : '';
    const isCorrectOptionClass = this.props.correctOptionId === this.props.id ? 'correct' : 'incorrect';
    return `Option ${showResult ? isSelectedOptionClass : ''} ${showResult ? isCorrectOptionClass : ''}`;
  }

  handleSelection() {
    this.props.onOptionSelect(this.props.id);
  }

  render() {
    return (
      <RaisedButton
        className={this.getClasses()}
        onClick={this.handleSelection}
        label={this.props.name}
      />
    );
  }
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  selectedOptionId: PropTypes.string,
  correctOptionId: PropTypes.string.isRequired,
};

Option.defaultProps = {
  selectedOptionId: null,
};

export default Option;
