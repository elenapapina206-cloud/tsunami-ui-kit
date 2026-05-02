import React from 'react';
import './ConfirmContent.css';

export const ConfirmContent = ({
  title = 'Подтверждение',
  message = 'Очистить корзину полностью?',
  confirmText = 'Удалить',
  cancelText = 'Отмена',
  onConfirm,
  onCancel,
  ...props
}) => {
  return (
    <div className="confirm-content" {...props}>
      <h3 className="confirm-content-title">{title}</h3>
      <p className="confirm-content-message">{message}</p>
      <div className="confirm-content-buttons">
        <button className="confirm-content-btn cancel-btn" onClick={onCancel}>
          {cancelText}
        </button>
        <button className="confirm-content-btn confirm-btn" onClick={onConfirm}>
          {confirmText}
        </button>
      </div>
    </div>
  );
};