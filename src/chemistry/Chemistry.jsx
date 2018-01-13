import React, { Component } from 'react';

import Element from './Element';
import periodicTable from './periodicTable';

import Options from '../shared/Options';
import { getRandomIntInclusive } from '../shared/utils';

import './Chemistry.css';

class Chemistry extends Component {
  static getRandomElement() {
    return periodicTable[getRandomIntInclusive(0, periodicTable.length)];
  }

  render() {
    const element = Chemistry.getRandomElement();
    return (
      <div className="game-board">
        <Element name={element.name} symbol={element.symbol} />
        <Options optionsStore={periodicTable} currentElement={element} />
      </div>
    );
  }
}

export default Chemistry;
