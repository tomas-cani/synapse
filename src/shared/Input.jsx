import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick(e) {
    if (e.type === 'click' || e.key === 'Enter') {
      this.props.onClick();
    }
  }

  handleInput(e) {
    this.props.onInput(e.target.value);
  }

  render() {
    return (
      <input
        id={this.props.id}
        type={this.props.type}
        className={`Input ${this.props.className}`}
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
        onChange={this.handleInput}
        value={this.props.value}
      />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onInput: PropTypes.func,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  id: null,
  onClick: () => {},
  onInput: () => {},
  value: '',
};

export default Input;
