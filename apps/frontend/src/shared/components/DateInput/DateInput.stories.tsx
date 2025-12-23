import type { Meta, StoryObj } from '@storybook/react';
import DateInput from './DateInput';

const meta = {
  title: 'Shared/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '2024-07-01',
    onInputClick: () => {},
    placeholder: '날짜 선택',
  },
};

export const WithDate: Story = {
  args: {
    date: '2024-12-25',
    onInputClick: () => {},
    placeholder: '날짜 선택',
  },
};

export const EmptyDate: Story = {
  args: {
    date: '',
    onInputClick: () => {},
    placeholder: '날짜 선택',
  },
};
