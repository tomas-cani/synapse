import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

import './Options.css';

class Options extends Component {
  constructor(props) {
    super(props);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
  }

  handleOptionSelect(id) {
    if (!this.props.selectedOptionId) {
      this.props.onOptionSelect(id);
    }
  }

  render() {
    const options = this.props.options.map(option => (
      <Option
        key={option.id}
        id={option.id}
        name={option.name}
        onOptionSelect={this.handleOptionSelect}
        selectedOptionId={this.props.selectedOptionId}
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
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  correctOption: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  selectedOptionId: PropTypes.string,
};

Options.defaultProps = {
  selectedOptionId: null,
};

export default Options;
