import React from 'react';

// import periodicTable from '../chemistry/periodicTable';
import countries from './countries';
import Flag from './Flag';
// import Element from '../chemistry/Element';
import Subject from '../subject/Subject';

const difficultyLevels = [
  {
    description: 'First 20 countries',
    max: 20,
  },
  {
    description: 'First 50 countries',
    max: 50,
  },
  {
    description: 'First 85 countries',
    max: 85,
  },
  {
    description: 'First 130 countries',
    max: 130,
  },
  {
    description: 'All 195 countries',
    max: 195,
  },
];

const questions = [Flag];

const Geography = () => (
  <Subject
    difficultyLevels={difficultyLevels}
    name="Geography"
    questions={questions}
    subjectData={countries}
    subjectDataProperties={['name']}
  />
);

export default Geography;
