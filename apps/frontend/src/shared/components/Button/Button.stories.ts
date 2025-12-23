import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: '버튼의 너비',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    children: {
      control: 'text',
      description: '버튼 내용',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled 버튼',
  },
};

export const WithOnClick: Story = {
  args: {
    children: '클릭해보세요',
    onClick: () => alert('버튼이 클릭되었습니다!'),
  },
};
