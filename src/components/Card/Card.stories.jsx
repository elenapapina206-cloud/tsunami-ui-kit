import React from 'react';
import { Card } from './Card';

export default {
  title: 'Tsunami/Card',
  component: Card,
  parameters: { layout: 'centered' },
  argTypes: {
    orientation: { 
      control: 'select', 
      options: ['vertical', 'horizontal'] },
    title: { 
      control: 'text' },
    description: { 
      control: 'text' },
    price: { 
      control: 'text' },
    image: { 
      control: 'text' },
    badgeType: { 
      control: 'select', 
      options: [null, 'new', 'hit', 'spicy', 'popular'] },
    badgeShowIcon: { 
      control: 'boolean', 
      name: 'Show fire icon in badge' },
  },
};

const Template = (args) => <Card {...args} onAddToCart={() => {}} />;
export const Interactive = Template.bind({});
Interactive.args = {
  orientation: 'vertical',
  title: 'Паста с креветками в сливочно-чесночном соусе',
  description: 'Спагетти аль-денте с сочными креветками в сливочно-чесночном соусе.',
  price: '650 ₽',
  image: 'https://i127.fastpic.org/big/2026/0501/63/_a06ad4a3f74fbcca2874c738fe9f9863.png?md5=htNEf8rIMrzg-xfUb3SW_w&expires=1777651200',
  badgeType: null,
  badgeShowIcon: false,
};