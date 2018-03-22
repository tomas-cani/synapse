import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

import './Element.css';

class Element extends Component {
  resolveHidden(property, propertyName) {
    if (this.props.property === propertyName) {
      return this.props.selectedOptionId ? this.props[property] : '?';
    }
    return this.props[property];
  }

  render() {
    return (
      <Paper className="Element container" zDepth={3}>
        <p className="Element-number">{this.resolveHidden('number', 'number')}</p>
        <h1 className="Element-symbol">{this.resolveHidden('symbol', 'id')}</h1>
        <p className="Element-name">{this.resolveHidden('name', 'name')}</p>
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
  property: PropTypes.string.isRequired,
  selectedOptionId: PropTypes.string,
};

Element.defaultProps = {
  selectedOptionId: null,
};

export default Element;
