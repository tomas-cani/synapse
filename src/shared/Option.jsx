import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Option.css';

class Option extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(e) {
    if (e.type === 'click' || e.key === 'Enter') {
      this.props.onOptionSelect(this.props.id);
    }
  }

  render() {
    const showResult = this.props.selectedOptionId;
    const isSelectedOptionClass = this.props.selectedOptionId === this.props.id ? 'selected' : '';
    const isCorrectOptionClass = this.props.correctOptionId === this.props.id ? 'correct' : 'incorrect';
    const classes = `Option ${showResult ? isSelectedOptionClass : ''} ${showResult ? isCorrectOptionClass : ''}`;
    return (
      <button className={classes} onClick={this.handleSelection} onKeyUp={this.handleSelection}>
        {this.props.name}
      </button>
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
