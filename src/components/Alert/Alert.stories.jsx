import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Tsunami/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  argTypes: {
    type: { 
        control: 'select', 
        options: ['info', 'success', 'error', 'warning'] },
    message: { 
        control: 'text' },
    autoHideDuration: { 
        control: 'number' },
  },
};

const Template = (args) => <Alert {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  type: 'info',
  message: 'Обычное сообщение',
  autoHideDuration: 0,
};