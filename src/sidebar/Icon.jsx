import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

import { Link } from 'react-router-dom';

import './Icon.css';

const Icon = props => (
  <Link className="Icon" to={props.url}>
    <ListItem>
      <img src={props.src} alt={props.name} />
    </ListItem>
  </Link>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Icon;
