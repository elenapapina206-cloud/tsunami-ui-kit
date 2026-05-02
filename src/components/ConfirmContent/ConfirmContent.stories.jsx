import React from 'react';
import { ConfirmContent } from './ConfirmContent';

export default {
  title: 'Tsunami/ConfirmContent',
  component: ConfirmContent,
  parameters: { 
    layout: 'centered' },
  argTypes: {
    title: { 
      control: 'text' },
    message: { 
      control: 'text' },
    confirmText: { 
      control: 'text' },
    cancelText: { 
      control: 'text' },
  },
};

const Template = (args) => (
  <ConfirmContent
    {...args}
    onConfirm={() => {}}
    onCancel={() => {}}
  />
);

export const Interactive = Template.bind({});
Interactive.args = {
  title: 'Подтверждение',
  message: 'Очистить корзину полностью?',
  confirmText: 'Удалить',
  cancelText: 'Отмена',
};