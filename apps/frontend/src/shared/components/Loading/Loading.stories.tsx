import type { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta = {
  title: 'Shared/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

