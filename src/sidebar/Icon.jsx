import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

const Icon = props => (
  <a className="Icon" href={props.url}>
    <img src={props.src} alt={props.name} />
  </a>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Icon;
