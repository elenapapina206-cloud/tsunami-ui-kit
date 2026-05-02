import React from 'react';
import './Input.css';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

export const Input = ({
  variant = 'default', 
  state = 'default',
  placeholder = 'Введите текст',
  value = '',
  onChange,
  showClearIcon = false, 
  onClear,
  onSearch, 
  errorMessage = '',
  disabled,
  ...props
}) => {
  const isDisabled = state === 'disabled' || disabled;
  const inputState = isDisabled ? 'disabled' : state;

  return (
    <div className={`input-wrapper input-${inputState} input-variant-${variant}`}>
      <div className="input-container">
        {variant === 'search' && (
          <div className="input-icon-left">
            <MagnifyingGlassIcon />
          </div>
        )}
        <input
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          {...props}
        />
        {variant === 'default' && showClearIcon && (
          <button
            className="input-clear-button"
            onClick={onClear}
            type="button"
            aria-label="Очистить"
            disabled={isDisabled}
          >
            <XMarkIcon />
          </button>
        )}
        {variant === 'search' && (
          <button
            className="input-search-button"
            onClick={onSearch}
            type="button"
            disabled={isDisabled}
          >
            Найти
          </button>
        )}
      </div>
      {state === 'error' && errorMessage && (
        <div className="input-error-message">{errorMessage}</div>
      )}
    </div>
  );
};