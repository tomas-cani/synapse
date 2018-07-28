import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question';

const TextQuestion = props => (
  <Question>
    { props.text }
  </Question>
);

TextQuestion.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextQuestion;
