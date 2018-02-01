import React from 'react';
import PropTypes from 'prop-types';

import './Screen.css';

const Screen = props => (
  <div className="Screen">
    {props.children}
  </div>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
