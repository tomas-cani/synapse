import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(e) {
    if (e.type === 'click' || e.key === 'Enter') {
      this.props.onSelect();
    }
  }

  render() {
    return (
      <button
        className={`Button ${this.props.classes}`}
        onClick={this.handleSelection}
        onKeyUp={this.handleSelection}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Button;
