import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    placeholder: '고객 이름 검색...',
  },
};

export const WithValue: Story = {
  args: {
    value: '홍길동',
    onChange: () => {},
    placeholder: '고객 이름 검색...',
  },
};
