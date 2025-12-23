import ChartIcon from '@/shared/assets/icons/Chart/ChartIcon';
import CustomerIcon from '@/shared/assets/icons/Customer/Customer';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TabBar, { type Props } from './TabBar';

const meta = {
  title: 'Shared/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabBarWithState = () => {
  const [activeTab, setActiveTab] = useState('frequency');

  const items = [
    {
      id: 'frequency',
      label: '가격대별 구매 빈도',
      icon: <ChartIcon />,
    },
    {
      id: 'ranking',
      label: '고객 구매 순위',
      icon: <CustomerIcon />,
    },
  ];

  return <TabBar items={items} activeTabId={activeTab} onTabChange={setActiveTab} />;
};

export const Default: Story = {
  render: () => <TabBarWithState />,
  args: {} as Props,
};

const SingleTabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <TabBar
      items={[
        {
          id: 'tab1',
          label: '단일 탭',
          icon: <ChartIcon />,
        },
      ]}
      activeTabId={activeTab}
      onTabChange={setActiveTab}
    />
  );
};

export const SingleTab: Story = {
  render: () => <SingleTabComponent />,
  args: {} as Props,
};

const ThreeTabsComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <TabBar
      items={[
        {
          id: 'tab1',
          label: '첫 번째 탭',
          icon: <ChartIcon />,
        },
        {
          id: 'tab2',
          label: '두 번째 탭',
          icon: <CustomerIcon />,
        },
        {
          id: 'tab3',
          label: '세 번째 탭',
          icon: <ChartIcon />,
        },
      ]}
      activeTabId={activeTab}
      onTabChange={setActiveTab}
    />
  );
};

export const ThreeTabs: Story = {
  render: () => <ThreeTabsComponent />,
  args: {} as Props,
};
