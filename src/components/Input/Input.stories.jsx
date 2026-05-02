import React, { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Tsunami/Input',
  component: Input,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { 
        control: 'select', 
        options: ['default', 'search'] },
    state: { 
        control: 'select', 
        options: ['default', 'active', 'error', 'disabled'] },
    placeholder: { 
        control: 'text' },
    errorMessage: { 
        control: 'text' },
    showClearIcon: { 
        control: 'boolean', 
        name: 'Show clear icon (only for default)' },
    value: { table: { disable: true } },//ненужные пропсы скрываются
    onChange: { table: { disable: true } },
    onClear: { table: { disable: true } },
    onSearch: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  const handleClear = () => setValue('');
  const handleSearch = () => console.log(`Поиск: "${value}"`);

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={handleClear}
      onSearch={handleSearch}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  variant: 'default',
  state: 'default',
  placeholder: 'Введите текст...',
  errorMessage: 'Ошибка!',
  showClearIcon: false,
};