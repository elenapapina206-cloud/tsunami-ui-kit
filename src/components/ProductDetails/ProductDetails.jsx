import React from 'react';
import './ProductDetails.css';
import { Button } from '../Button/Button';
import { Counter } from '../Counter/Counter';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const ProductDetails = ({
  title = 'Паста с креветками в сливочно-чесночном соусе',
  image = 'https://i127.fastpic.org/big/2026/0501/63/_a06ad4a3f74fbcca2874c738fe9f9863.png?md5=htNEf8rIMrzg-xfUb3SW_w&expires=1777651200',
  composition = 'Сливочный соус, креветки, пармезан, итальянские травы',
  spiciness = 'Средняя',
  weight = '320 г',
  price = '650 ₽',
  quantity = 1,
  onQuantityChange,
  onConfirm,
  onClose,
  ...props
}) => {
  return (
    <div className="product-details" {...props}>
      <button className="product-details-close" onClick={onClose} aria-label="Закрыть">
        <XMarkIcon className="product-details-close-icon" />
      </button>
      
      <h3 className="product-details-title">{title}</h3>
      
      <div className="product-details-image-wrapper">
        <img src={image} alt={title} className="product-details-image" />
      </div>
      
      <div className="product-details-composition">
        <p className="product-details-composition-text">
          Состав: {composition}
        </p>
        <p className="product-details-info">
          Острота: {spiciness}, {weight}
        </p>
      </div>

      <div className="product-details-footer">
        <div className="product-details-quantity">
          <span className="product-details-quantity-label">Количество:</span>
          <Counter value={quantity} onChange={onQuantityChange} showLabel={false} />
        </div>
        <div className="product-details-price-total">
          <div className="product-details-price-top">
            <span className="product-details-price">{price}</span>
          </div>
          <Button onClick={onConfirm}>Подтвердить</Button>
        </div>
      </div>
    </div>
  );
};