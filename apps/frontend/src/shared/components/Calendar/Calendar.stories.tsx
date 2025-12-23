import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './Calendar';

const meta = {
  title: 'Shared/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: '2024-07-01',
    endDate: '2024-07-31',
    onDateClick: () => {},
    selectionMode: 'start',
  },
};

export const EmptyState: Story = {
  args: {
    startDate: '',
    endDate: '',
    onDateClick: () => {},
    selectionMode: 'start',
  },
};

export const SelectedState: Story = {
  args: {
    startDate: '2024-07-15',
    endDate: '2024-07-31',
    onDateClick: () => {},
    selectionMode: 'start',
  },
};
