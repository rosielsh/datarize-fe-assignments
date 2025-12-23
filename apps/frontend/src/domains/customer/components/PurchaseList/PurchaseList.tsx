import { useCustomerPurchases } from '../../hooks/useCustomerPurchases';
import PurchaseListItem from '../PurchaseListItem/PurchaseListItem';
import * as S from './PurchaseList.styled';

type Props = {
  customerId: number;
};

const PurchaseList = ({ customerId }: Props) => {
  const { data: purchases, isLoading } = useCustomerPurchases(customerId);

  if (isLoading) {
    return <S.LoadingText>로딩 중...</S.LoadingText>;
  }

  if (purchases.length === 0) {
    return <S.EmptyText>구매 내역이 없습니다.</S.EmptyText>;
  }

  return (
    <S.PurchaseList>
      {purchases.map((purchase, index) => (
        <PurchaseListItem key={purchase.id ?? index} purchase={purchase} />
      ))}
    </S.PurchaseList>
  );
};

export default PurchaseList;
