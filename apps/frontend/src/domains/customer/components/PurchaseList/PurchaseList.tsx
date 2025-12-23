import Empty from '@/shared/components/Empty/Empty';
import Loading from '@/shared/components/Loading/Loading';
import { useCustomerPurchases } from '../../hooks/useCustomerPurchases';
import PurchaseListItem from '../PurchaseListItem/PurchaseListItem';
import * as S from './PurchaseList.styled';

type Props = {
  customerId: number;
};

const PurchaseList = ({ customerId }: Props) => {
  const { data, isLoading } = useCustomerPurchases(customerId);

  if (isLoading) {
    return <Loading />;
  }

  if (data.length === 0) {
    return <Empty message="구매 내역이 없습니다." />;
  }

  return (
    <S.Container>
      {data.map((purchase, index) => (
        <PurchaseListItem key={purchase.id ?? index} purchase={purchase} />
      ))}
    </S.Container>
  );
};

export default PurchaseList;
