import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.type === 'click' || e.key === 'Enter') {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button
        className={`Button ${this.props.classes}`}
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  classes: '',
};

export default Button;
