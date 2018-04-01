import React from 'react';

import periodicTable from './periodicTable';
import Element from './Element';
import Subject from '../subject/Subject';
import './Chemistry.css';

const difficultyLevels = [
  {
    description: 'First 2 periods of the periodic table. 10 elements',
    max: 10,
  },
  {
    description: 'First 3 periods of the periodic table. 18 elements',
    max: 18,
  },
  {
    description: 'First 4 periods of the periodic table. 36 elements',
    max: 36,
  },
  {
    description: 'First 6 periods of the periodic table. 86 elements',
    max: 86,
  },
  {
    description: 'All periods of the periodic table. 118 elements',
    max: 118,
  },
];

const Chemistry = () => (
  <Subject
    difficultyLevels={difficultyLevels}
    name="Chemistry"
    questionComponent={Element}
    subjectData={periodicTable}
  />
);

export default Chemistry;
