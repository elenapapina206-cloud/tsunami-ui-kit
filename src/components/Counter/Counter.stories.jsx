import React, { useState } from 'react';
import { Counter } from './Counter';

export default {
  title: 'Tsunami/Counter',
  component: Counter,
  parameters: { 
    layout: 'centered' },
  argTypes: {
    min: { 
      control: 'number' },
    max: { 
      control: 'number' },
    label: { 
      control: 'text' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || 1);
  return <Counter {...args} value={value} onChange={setValue} />;
};

export const Interactive = Template.bind({});
Interactive.args = {
  value: 1,
  min: 1,
  max: 99,
  label: '', 
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 1,
  min: 1,
  max: 99,
  label: 'Количество:',
};