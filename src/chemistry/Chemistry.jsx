import React, { Component } from 'react';

import Element from './Element';
import periodicTable from './periodicTable';
import { getRandomIntInclusive } from '../shared/utils';

class Chemistry extends Component {
  static getRandomElement() {
    return periodicTable[getRandomIntInclusive(0, periodicTable.length)];
  }

  render() {
    const element = Chemistry.getRandomElement();
    return (
      <div className="">
        <Element name={element.name} symbol={element.symbol} />
      </div>
    );
  }
}

export default Chemistry;
