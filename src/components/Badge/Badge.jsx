import React from 'react';
import './Badge.css';
import { FireIcon } from '@heroicons/react/24/solid';

const badgeTypes = {
  new: 'Новинка',
  hit: 'Хит',
  spicy: 'Острое',
  popular: 'Популярное',
};

export const Badge = ({
  type = 'new',
  showIcon = false,
  customText,
  ...props
}) => {
  const text = customText || badgeTypes[type];
  return (
    <div className={`badge badge-${type} ${showIcon ? 'badge-with-icon' : ''}`} {...props}>
      {showIcon && <FireIcon className="badge-icon" />}
      <span className="badge-text">{text}</span>
    </div>
  );
};