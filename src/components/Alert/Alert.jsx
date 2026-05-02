import React, { useState, useEffect, useRef } from 'react';
import './Alert.css';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const Alert = ({
  type = 'info',
  message = 'Сообщение',
  onClose,
  autoHideDuration = 0,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  // Сбрасываем видимость при изменении message или type (чтобы при обновлении стори компонент показывался заново)
  useEffect(() => {
    setVisible(true);
    // Очищаем старый таймер
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [message, type]);

  useEffect(() => {
    if (autoHideDuration > 0 && visible) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [autoHideDuration, visible]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className={`alert alert-${type}`} role="alert" {...props}>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={handleClose} aria-label="Закрыть">
        <XMarkIcon className="close-icon" />
      </button>
    </div>
  );
};