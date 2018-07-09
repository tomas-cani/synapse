import React from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';

import chemistry from './icons/chemistry.svg';
import geography from './icons/earth-globe.svg';
import Icon from './Icon';

const iconsData = [
  { url: '/chemistry', src: chemistry, name: 'Chemistry' },
  { url: '/geography', src: geography, name: 'Geography' },
];

const Sidebar = () => {
  const icons = iconsData.map(iconData => (
    <Icon
      key={iconData.name}
      url={iconData.url}
      src={iconData.src}
      name={iconData.name}
    />
  ));
  return (
    <Paper>
      <List>
        { icons }
      </List>
    </Paper>
  );
};

export default Sidebar;
