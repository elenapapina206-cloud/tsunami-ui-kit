import React from 'react';
import { InfoCard } from './InfoCard';

export default {
  title: 'Tsunami/InfoCard',
  component: InfoCard,
  parameters: { 
    layout: 'centered' },
  argTypes: {
    title: { 
      control: 'text' },
    description: { 
      control: 'text' },
    subtitle: { 
      control: 'text' },
  },
};

const Template = (args) => <InfoCard {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  title: 'Акция',
  description: 'С днем рождения!!! ',
  subtitle: 'В вашу особую дату мы говорим только «ДА» вашему хорошему настроению. Поэтому дарим скидку 25% на абсолютно всё меню кофейни.',
};