import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

import './Element.css';

class Element extends Component {
  render() {
    return (
      <Paper className="Element container" zDepth="3">
        <p className="Element-number">{this.props.number}</p>
        <h1 className="Element-symbol">{this.props.symbol}</h1>
        <p className="Element-name">{this.props.selectedOptionId ? this.props.name : '?'}</p>
        <p className="Element-mass">{this.props.mass}</p>
      </Paper>
    );
  }
}

Element.propTypes = {
  number: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mass: PropTypes.number.isRequired,
  selectedOptionId: PropTypes.string,
};

Element.defaultProps = {
  selectedOptionId: null,
};

export default Element;
