import React from 'react';
import { Banner } from './Banner';

export default {
  title: 'Tsunami/Banner',
  component: Banner,
  parameters: { layout: 'centered' },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

const Template = (args) => <Banner {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  src: 'https://i127.fastpic.org/big/2026/0501/f5/_b4223c9620eb778238e522f8a566a2f5.png?md5=C2tGUc7TADKP18DjmFmMVw&expires=1777651200',
  alt: 'Баннер акции',
};
