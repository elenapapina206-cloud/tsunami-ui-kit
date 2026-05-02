import React from 'react';
import './OrderForm.css';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const OrderForm = ({
  cartItems = [
    { id: 1, name: 'Паста с креветками', quantity: 1, price: 650 }
  ],
  phoneNumber = '',
  onPhoneChange,
  subtotal = 650,
  delivery = 100,
  total = 750,
  onClearCart,
  onSubmit,
  onClose,
  ...props
}) => {
  return (
    <div className="order-form" {...props}>
      <button className="order-form-close" onClick={onClose} aria-label="Закрыть">
        <XMarkIcon className="order-form-close-icon" />
      </button>
      
      <h2 className="order-form-title">Корзина</h2>
      
      <div className="order-form-cart-list">
        <div className="order-form-cart-header">
          <span>Список</span>
          <div className="order-form-cart-header-right">
            <span>Количество</span>
            <span>Цена</span>
          </div>
        </div>
        
        {cartItems.map((item) => (
          <div key={item.id} className="order-form-cart-item">
            <span className="order-form-item-name">{item.name}</span>
            <div className="order-form-item-details">
              <span className="order-form-item-quantity">{item.quantity} шт.</span>
              <span className="order-form-item-price">{item.price} ₽</span>
            </div>
          </div>
        ))}
      </div>

      <div className="order-form-phone">
        <label className="order-form-label">Номер телефона:</label>
        <input
          type="tel"
          className="order-form-phone-input"
          placeholder="Введите номер"
          value={phoneNumber}
          onChange={(e) => {
            const value = e.target.value.slice(0, 12);
            onPhoneChange(value);
          }}
          maxLength={12}
        />
      </div>

      <div className="order-form-summary">
        <div className="order-form-row">
          <span>Итого:</span>
          <span>{subtotal} ₽</span>
        </div>
        <div className="order-form-row">
          <span>Доставка:</span>
          <span>{delivery} ₽</span>
        </div>
        <div className="order-form-total">
          <span>Всего:</span>
          <span className="order-form-total-price">{total} ₽</span>
        </div>
      </div>

      <div className="order-form-buttons">
        <button className="order-form-clear-btn" onClick={onClearCart}>
          Удалить корзину
        </button>
        <button className="order-form-submit-btn" onClick={onSubmit}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};