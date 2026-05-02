import React from 'react';
import './Card.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

export const Card = ({
  orientation = 'vertical', 
  title = 'Паста с креветками в сливочно-чесночном соусе',
  description = 'Спагетти аль-денте с сочными креветками в сливочно-чесночном соусе.',
  price = '650 ₽',
  image = 'https://i127.fastpic.org/big/2026/0501/63/_a06ad4a3f74fbcca2874c738fe9f9863.png?md5=htNEf8rIMrzg-xfUb3SW_w&expires=1777651200',
  badgeType = null,       
  badgeShowIcon = false,  
  onAddToCart,            
  ...props
}) => {
  return (
    <div className={`card card-${orientation}`} {...props}>
      {orientation === 'vertical' ? (
        // Вертикальная карточка
        <>
          <div className="card-image">
            <img src={image} alt={title} />
            {badgeType && (
              <div className="card-badge">
                <Badge type={badgeType} showIcon={badgeShowIcon} />
              </div>
            )}
          </div>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <div className="card-footer">
              <span className="card-price">{price}</span>
              <Button size="small" onClick={onAddToCart}>В корзину</Button>
            </div>
          </div>
        </>
      ) : (
        // Горизонтальная карточка
        <div className="card-horizontal-layout">
          <div className="card-image-horizontal">
            <img src={image} alt={title} />
            {badgeType && (
              <div className="card-badge-horizontal">
                <Badge type={badgeType} showIcon={badgeShowIcon} />
              </div>
            )}
          </div>
          <div className="card-content-horizontal">
            <h3 className="card-title">{title}</h3>
            <p className="card-description-horizontal">{description}</p>
            <div className="card-footer-horizontal">
              <span className="card-price">{price}</span>
              <Button size="small" onClick={onAddToCart}>В корзину</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};