import CustomerRankingSection from '@/domains/customer/components/CustomerRankingSection/CustomerRankingSection';
import PurchaseFrequencySection from '@/domains/purchase-frequency/components/PurchaseFrequencySection/PurchaseFrequencySection';
import ChartIcon from '@/shared/assets/icons/Chart/ChartIcon';
import CustomerIcon from '@/shared/assets/icons/Customer/Customer';
import Header from '@/shared/components/Header/Header';
import TabBar from '@/shared/components/TabBar/TabBar';
import { useState } from 'react';
import * as S from './DashboardPage.styled';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('frequency');

  const tabItems = [
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

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.TabBarContainer>
          <TabBar items={tabItems} activeTabId={activeTab} onTabChange={setActiveTab} />
        </S.TabBarContainer>
        {activeTab === 'frequency' && <PurchaseFrequencySection />}
        {activeTab === 'ranking' && <CustomerRankingSection />}
      </S.Content>
    </S.Container>
  );
};

export default DashboardPage;
