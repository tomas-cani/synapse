import React from 'react';
import PropTypes from 'prop-types';

import './Flag.css';

const Flag = props => (
  <img className="Flag" src={props.data.flag} alt="Country flag" />
);

Flag.propTypes = {
  data: PropTypes.shape({
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

export default Flag;
