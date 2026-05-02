import React, { useState } from 'react';
import { OrderForm } from './OrderForm';

export default {
  title: 'Tsunami/OrderForm',
  component: OrderForm,
  parameters: { layout: 'centered' },
  argTypes: {
    phoneNumber: { 
        control: 'text', 
        description: 'Номер телефона' },
    subtotal: { 
        control: 'number', 
        description: 'Итого' },
    delivery: { 
        control: 'number', 
        description: 'Доставка' },
    total: { 
        control: 'number', 
        description: 'Всего' },
    cartItems: { 
        control: 'object', 
        description: 'Товары в корзине' },
  },
};

const Template = (args) => {
  const [phone, setPhone] = useState(args.phoneNumber || '');
  
  return (
    <OrderForm
      {...args}
      phoneNumber={phone}
      onPhoneChange={setPhone}
      onClearCart={() => {}}
      onSubmit={() => {}}
      onClose={() => {}}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  phoneNumber: '',
  subtotal: 650,
  delivery: 100,
  total: 750,
  cartItems: [
    { id: 1, name: 'Паста с креветками', quantity: 1, price: 650 }
  ],
};