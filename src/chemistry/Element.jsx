import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Element extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.symbol}</h1>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

Element.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Element;
