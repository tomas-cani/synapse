import React from 'react';
import PropTypes from 'prop-types';

import Options from './Options';

const Exercise = props => (
  <div className="Exercise container vertical">
    {props.children}
    <Options
      options={props.options}
      correctOption={props.correctOption}
      onOptionSelect={props.onOptionSelect}
      property={props.property}
      selectedOptionId={props.selectedOptionId}
    />
  </div>
);

Exercise.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  correctOption: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  property: PropTypes.string.isRequired,
  selectedOptionId: PropTypes.string,
};

Exercise.defaultProps = {
  selectedOptionId: null,
};

export default Exercise;
