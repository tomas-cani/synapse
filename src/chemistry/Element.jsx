import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Element.css';

class Element extends Component {
  render() {
    return (
      <div className="Element">
        <h1 className="Element-symbol">{this.props.symbol}</h1>
      </div>
    );
  }
}

Element.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Element;
