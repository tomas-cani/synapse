import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Element.css';

class Element extends Component {
  render() {
    return (
      <div className="Element">
        <p className="Element-number">{this.props.number}</p>
        <h1 className="Element-symbol">{this.props.symbol}</h1>
        <p className="Element-name">{this.props.selectedOptionId ? this.props.name : '?'}</p>
        <p className="Element-mass">{this.props.mass}</p>
      </div>
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
