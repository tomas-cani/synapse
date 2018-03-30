import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Icon.css';

const Icon = props => (
  <Link className="Icon" to={props.url}>
    <img src={props.src} alt={props.name} />
  </Link>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Icon;
