import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import { getRandomIntInclusive } from './utils';

import './Options.css';

class Options extends Component {
  getOptions(optionsStore) {
    const selectedOptions = [this.props.currentElement];
    while (selectedOptions.length < 4) {
      const randomOption = optionsStore[getRandomIntInclusive(0, optionsStore.length)];
      if (selectedOptions.find(selectedOption => selectedOption.symbol !== randomOption.symbol)) {
        selectedOptions.push(randomOption);
      }
    }
    return selectedOptions.map(selectedOption =>
      <Option key={selectedOption.symbol} name={selectedOption.name} />);
  }

  render() {
    const selectedOptions = this.getOptions(this.props.optionsStore);
    return (
      <div className="Options">{selectedOptions}</div>
    );
  }
}

Options.propTypes = {
  optionsStore: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentElement: PropTypes.shape({ }).isRequired,
};

export default Options;
