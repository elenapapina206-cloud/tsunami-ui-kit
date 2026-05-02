import React, { useEffect } from 'react';
import './Modal.css';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const Modal = ({
  isOpen = false,
  onClose,
  title = '',
  children,
  showCloseButton = true,
  closeOnOverlayClick = true,
  ...props
}) => {
  // Блокирование скроллa страницы при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} {...props}>
        {(title || showCloseButton) && (
          <div className="modal-header">
            {title && <h3 className="modal-title">{title}</h3>}
            {showCloseButton && (
              <button className="modal-close-btn" onClick={onClose} aria-label="Закрыть">
                <XMarkIcon className="modal-close-icon" />
              </button>
            )}
          </div>
        )}
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};