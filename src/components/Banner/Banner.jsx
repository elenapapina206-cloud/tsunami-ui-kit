import React from 'react';
import './Banner.css';

export const Banner = ({
  src, 
  alt = 'Баннер акции',
  onClick,
  className = '',
  ...props
}) => {
  return (
    <div className={`banner ${className}`} onClick={onClick} {...props}>
      <img src={src} alt={alt} className="banner-image" />
    </div>
  );
};