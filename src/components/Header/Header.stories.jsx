import React from 'react';
import { Header } from './Header';

export default {
  title: 'Tsunami/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'Вариант хедера',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Тема (светлая/тёмная)',
    },
    logoSrc: {
      control: 'text',
      description: 'Ссылка на картинку логотипа',
    },
    cartBgColor: {
      control: 'color',
      description: 'Цвет фона кнопки Корзина',
    },
    cartTextColor: {
      control: 'color',
      description: 'Цвет текста кнопки Корзина',
    },
    saleBgColor: {
      control: 'color',
      description: 'Цвет фона кнопки Акции',
    },
    saleTextColor: {
      control: 'color',
      description: 'Цвет текста кнопки Акции',
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  variant: '1',
  theme: 'light',
  logoSrc: 'https://i127.fastpic.org/big/2026/0501/a6/573586341493ce8987547aedb2c8a2a6.png?md5=t80Lm4ovEvicidCpmP2dIA&expires=1777654800',
  cartBgColor: '',
  cartTextColor: '',
  saleBgColor: '#0063FF',
  saleTextColor: '#FFFFFF',
};