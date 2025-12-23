import type { ReactNode } from 'react';
import { S } from './TabBar.styled';

type TabItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

export type Props = {
  items: TabItem[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
};

const TabBar = ({ items, activeTabId, onTabChange }: Props) => {
  return (
    <S.Container>
      {items.map((item) => (
        <S.TabItem
          key={item.id}
          isActive={activeTabId === item.id}
          onClick={() => onTabChange(item.id)}
          type="button"
        >
          <S.IconWrapper isActive={activeTabId === item.id}>{item.icon}</S.IconWrapper>
          <S.Label>{item.label}</S.Label>
        </S.TabItem>
      ))}
    </S.Container>
  );
};

export default TabBar;
