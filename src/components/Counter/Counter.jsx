import React from 'react';
import './Counter.css';

export const Counter = ({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  label, 
  ...props
}) => {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="counter" {...props}>
      {label && <span className="counter-label">{label}</span>}
      <button
        className="counter-btn counter-btn-decrement"
        onClick={decrement}
        disabled={value <= min}
        type="button"
      >
        –
      </button>
      <span className="counter-value">{value}</span>
      <button
        className="counter-btn counter-btn-increment"
        onClick={increment}
        disabled={value >= max}
        type="button"
      >
        +
      </button>
    </div>
  );
};