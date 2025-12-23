import type { Meta, StoryObj } from '@storybook/react';
import Empty from './Empty';

const meta = {
  title: 'Shared/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
