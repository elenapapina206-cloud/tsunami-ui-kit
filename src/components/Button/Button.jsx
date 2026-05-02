import React from 'react';
import './Button.css';

export const Button = ({
  children,
  type = 'default',
  state = 'default',
  size = 'medium',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  elevated = false,
  customBgColor = '',     
  customTextColor = '',   
  onClick,
  ...props
}) => {
  const isDisabled = state === 'disabled';
  const isPressed = state === 'pressed';
  const pressedClass = isPressed ? 'button-pressed' : '';
  const iconOnlyClass = iconOnly ? 'button-icon-only' : '';
  const elevatedClass = elevated ? 'button-elevated' : '';

  const customStyle = {
    ...(customBgColor && { backgroundColor: customBgColor }),
    ...(customTextColor && { color: customTextColor }),
  };

  return (
    <button
      className={`button button-${type} button-${size} ${pressedClass} ${iconOnlyClass} ${elevatedClass}`}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      style={customStyle}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="button-icon button-icon-left">{icon}</span>
      )}
      {!iconOnly && <span className="button-text-label">{children}</span>}
      {icon && iconPosition === 'right' && !iconOnly && (
        <span className="button-icon button-icon-right">{icon}</span>
      )}
    </button>
  );
};