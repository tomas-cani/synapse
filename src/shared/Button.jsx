import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

import './Button.css';

const Button = props => (
  <Input
    type="button"
    className={`Button ${props.classes}`}
    onClick={props.onClick}
    onKeyUp={props.onClick}
    value={props.value}
  />
);

Button.propTypes = {
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  classes: '',
};

export default Button;
