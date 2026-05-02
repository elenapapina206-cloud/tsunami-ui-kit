import React from 'react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Tsunami/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'outlined', 'text'],
    },
    state: {
      control: 'select',
      options: ['default', 'pressed', 'disabled'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small', 'verysmall'],
    },
    showIcon: {
      control: 'boolean',
      name: 'Show icon',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      name: 'Icon position',
    },
    iconOnly: { 
      control: 'boolean', 
      name: 'Icon only (no text)' 
    },
    elevated: {
      control: 'boolean',
      name: 'Elevated (shadow)',
    },
    customBgColor: {
      control: 'color',
      name: 'Background color',
      description: 'Кастомный цвет фона кнопки',
    },
    customTextColor: {
      control: 'color',
      name: 'Text color',
      description: 'Кастомный цвет текста кнопки',
    },
  },
};

// Шаблон с контролами
const Template = (args) => {
  const icon = args.showIcon ? <XMarkIcon className="button-icon" /> : undefined;
  const { showIcon, iconOnly, ...buttonArgs } = args;
  return (
    <Button {...buttonArgs} icon={icon} iconOnly={iconOnly}>
      {!iconOnly ? 'Кнопка' : ''}
    </Button>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  type: 'default',
  state: 'default',
  size: 'medium',
  showIcon: false,
  iconPosition: 'left',
  iconOnly: false,
  elevated: false,
  customBgColor: '',
  customTextColor: '',
};


// Проверка клика по кнопке //
export const ClickTest = Template.bind({});
ClickTest.args = {
  type: 'default',
  size: 'medium',
};
ClickTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Кнопка');
  await userEvent.click(button);
};

// Проверка кнопки с иконкой //
export const IconButtonTest = Template.bind({});
IconButtonTest.args = {
  type: 'default',
  size: 'medium',
  showIcon: true,
  iconOnly: true,
};
IconButtonTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await userEvent.click(button);
};

// Проверка кнопки с тенью //
export const ElevatedButtonTest = Template.bind({});
ElevatedButtonTest.args = {
  type: 'default',
  size: 'medium',
  elevated: true,
};

// Проверка всех типов кнопок //
export const AllTypesTest = () => (
  <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
    <Button type="default">Default</Button>
    <Button type="outlined">Outlined</Button>
    <Button type="text">Text</Button>
  </div>
);
AllTypesTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  
  const defaultBtn = canvas.getByText('Default');
  const outlinedBtn = canvas.getByText('Outlined');
  const textBtn = canvas.getByText('Text');
  
  await userEvent.click(defaultBtn);
  await userEvent.click(outlinedBtn);
  await userEvent.click(textBtn);
};