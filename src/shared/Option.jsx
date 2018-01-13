import React from 'react';
import PropTypes from 'prop-types';

import './Option.css';

const Option = props => (
  <div className="Option">
    <p>{props.name}</p>
  </div>
);

Option.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Option;
