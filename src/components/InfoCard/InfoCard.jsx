import React from 'react';
import './InfoCard.css';

export const InfoCard = ({
  title,        
  description,  
  subtitle,    
  ...props
}) => {
  return (
    <div className="info-card" {...props}>
      <div className="info-card-content">
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-description">{description}</p>
        <span className="info-card-subtitle">{subtitle}</span>
      </div>
    </div>
  );
};