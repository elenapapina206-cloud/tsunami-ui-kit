import React, { useState } from 'react';
import { ProductDetails } from './ProductDetails';

export default {
  title: 'Tsunami/ProductDetails',
  component: ProductDetails,
  parameters: { layout: 'centered' },
};

const Template = (args) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <ProductDetails
      {...args}
      quantity={quantity}
      onQuantityChange={setQuantity}
      onConfirm={() => {}} 
      onClose={() => {}}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  title: 'Паста с креветками в сливочно-чесночном соусе',
  image: 'https://i127.fastpic.org/big/2026/0501/63/_a06ad4a3f74fbcca2874c738fe9f9863.png?md5=htNEf8rIMrzg-xfUb3SW_w&expires=1777651200',
  composition: 'Сливочный соус, креветки, пармезан, итальянские травы',
  spiciness: 'Средняя',
  weight: '320 г',
  price: '650 ₽',
};