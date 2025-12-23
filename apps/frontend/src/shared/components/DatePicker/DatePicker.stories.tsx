import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const meta = {
  title: 'Shared/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: new Date(2024, 6, 1),
    endDate: new Date(2024, 6, 31),
    onDateRangeChange: () => {},
  },
};

export const EmptyState: Story = {
  args: {
    startDate: null,
    endDate: null,
    onDateRangeChange: () => {},
  },
};

export const SingleDate: Story = {
  args: {
    startDate: new Date(2024, 6, 15),
    endDate: null,
    onDateRangeChange: () => {},
  },
};
