import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import { fillWithRandomElements, shuffleArray } from './utils';

import './Options.css';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.getOptions(this.props.optionsSource),
      selectedOptionId: null,
    };
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
  }

  getOptions(optionsSource) {
    const randomOptions = fillWithRandomElements([this.props.correctOption], optionsSource, 4);
    shuffleArray(randomOptions);
    return randomOptions;
  }

  handleOptionSelect(id) {
    this.setState({
      selectedOptionId: id,
    });
  }

  render() {
    const options = this.state.options.map(option => (
      <Option
        key={option.id}
        id={option.id}
        name={option.name}
        onOptionSelect={this.handleOptionSelect}
        selectedOptionId={this.state.selectedOptionId}
        correctOptionId={this.props.correctOption.id}
      />
    ));
    return (
      <div className="Options">
        {options}
      </div>
    );
  }
}

Options.propTypes = {
  optionsSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  correctOption: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
};

export default Options;
