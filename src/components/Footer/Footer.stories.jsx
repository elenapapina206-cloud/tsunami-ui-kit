import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'Tsunami/Footer',
  component: Footer,
  parameters: { 
    layout: 'fullscreen' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'minimal'],
      description: 'Вариант футера',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Тема (светлая/тёмная)',
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  variant: 'default',
  theme: 'light',
};