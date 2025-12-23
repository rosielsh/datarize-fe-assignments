import type { Meta, StoryObj } from '@storybook/react';
import BarChart from './BarChart';

const meta = {
  title: 'Shared/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { range: '0 - 20000', count: 10 },
  { range: '20001 - 30000', count: 16 },
  { range: '30001 - 40000', count: 44 },
  { range: '40001 - 50000', count: 28 },
  { range: '50001 - 60000', count: 11 },
  { range: '60001 - 70000', count: 17 },
  { range: '70001 - 80000', count: 0 },
  { range: '80001 - 90000', count: 0 },
  { range: '90001 - 100000', count: 13 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    title: '가격대별 구매 빈도',
    dateRange: {
      startDate: '2024.07.01',
      endDate: '2024.07.31',
    },
  },
};

export const WithoutTitle: Story = {
  args: {
    data: sampleData,
  },
};

export const WithoutDateRange: Story = {
  args: {
    data: sampleData,
    title: '가격대별 구매 빈도',
  },
};
