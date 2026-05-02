import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Tsunami/Badge',
  component: Badge,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    type: { 
        control: 'select', 
        options: ['new', 'hit', 'spicy', 'popular'] },
    showIcon: { 
        control: 'boolean' },
    customText: { 
        control: 'text' },
  },
};

const Template = (args) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  }}>
    <Badge {...args} />
  </div>
);

export const Interactive = Template.bind({});
Interactive.args = {
  type: 'new',
  showIcon: false,
  customText: '',
};