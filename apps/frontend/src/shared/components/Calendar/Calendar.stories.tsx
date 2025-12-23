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
    startDate: new Date(2024, 6, 1),
    endDate: new Date(2024, 6, 31),
    onDateClick: () => {},
    selectionMode: 'start',
  },
};

export const EmptyState: Story = {
  args: {
    startDate: null,
    endDate: null,
    onDateClick: () => {},
    selectionMode: 'start',
  },
};

export const SelectedState: Story = {
  args: {
    startDate: new Date(2024, 6, 15),
    endDate: new Date(2024, 6, 31),
    onDateClick: () => {},
    selectionMode: 'start',
  },
};
