import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { ProductDetails } from '../ProductDetails/ProductDetails';
import { OrderForm } from '../OrderForm/OrderForm';
import { ConfirmContent } from '../ConfirmContent/ConfirmContent';
import { InfoCard } from '../InfoCard/InfoCard';

export default {
  title: 'Tsunami/Modal',
  component: Modal,
  parameters: { 
    layout: 'centered' 
  },
};

// ProductDetiels Modal //
export const ProductDetailsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Детали блюда</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="" showCloseButton={false}>
        <ProductDetails
          quantity={quantity}
          onQuantityChange={setQuantity}
          onConfirm={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
};

// OrderForm Modal//
export const OrderFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [cartItems] = useState([
    { id: 1, name: 'Паста с креветками', quantity: 1, price: 650 }
  ]);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Оформить заказ</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="" showCloseButton={false}>
        <OrderForm
          cartItems={cartItems}
          phoneNumber={phone}
          onPhoneChange={setPhone}
          subtotal={650}
          delivery={100}
          total={750}
          onClearCart={() => {}}
          onSubmit={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
};

// ConfirmContent Modal//
export const ConfirmModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Удалить корзину</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="" showCloseButton={false}>
        <ConfirmContent
          title="Подтверждение"
          message="Очистить корзину полностью?"
          confirmText="Удалить"
          cancelText="Отмена"
          onConfirm={() => setIsOpen(false)}
          onCancel={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
};

// InfoCard Modal //
export const InfoCardModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Акция</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="" showCloseButton={false}>
        <InfoCard
          title="Доставка"
          description="от 30 минут"
          subtitle="Бесплатно от 1000 ₽"
        />
      </Modal>
    </>
  );
};