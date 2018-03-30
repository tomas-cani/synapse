import React from 'react';
import chemistry from './icons/chemistry.svg';
import geography from './icons/earth-globe.svg';
import astronomy from './icons/telescope.svg';
import Icon from './Icon';
import './Sidebar.css';

const iconsData = [
  { url: '/astronomy', src: astronomy, name: 'Astronomy' },
  { url: '/chemistry', src: chemistry, name: 'Chemistry' },
  { url: '/geography', src: geography, name: 'Geography' },
];

const Sidebar = () => {
  const icons = iconsData.map(iconData =>
    <Icon key={iconData.name} url={iconData.url} src={iconData.src} name={iconData.name} />);
  return (
    <header className="Sidebar">
      {icons}
    </header>
  );
};

export default Sidebar;
