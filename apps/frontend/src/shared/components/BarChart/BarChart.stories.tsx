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

const formatRange = (range: string | number): string => {
  const rangeStr = String(range);
  const parts = rangeStr.split(' - ');
  if (parts.length !== 2) return rangeStr;

  const start = parseInt(parts[0], 10);
  const end = parseInt(parts[1], 10);

  const formatAmount = (amount: number): string => {
    if (amount === 0) return '~';
    const 만원 = Math.floor(amount / 10000);
    if (만원 === 0) {
      return `${amount}원`;
    }
    return `${만원}만원`;
  };

  if (start === 0) {
    return `~${formatAmount(end)}`;
  }

  return `${formatAmount(start)}~${formatAmount(end)}`;
};

export const Default: Story = {
  args: {
    data: sampleData,
    xAxisKey: 'range',
    barKey: 'count',
    formatXAxisLabel: formatRange,
  },
};

export const WithoutFormat: Story = {
  args: {
    data: sampleData,
    xAxisKey: 'range',
    barKey: 'count',
  },
};
