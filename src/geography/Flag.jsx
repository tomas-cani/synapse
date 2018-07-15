import React from 'react';
import PropTypes from 'prop-types';

import './Flag.css';
import Question from '../question/Question';

const Flag = props => (
  <Question>
    <img className="Flag" src={props.data.flag} alt="Country flag" />
  </Question>
);

Flag.propTypes = {
  data: PropTypes.shape({
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Flag;
