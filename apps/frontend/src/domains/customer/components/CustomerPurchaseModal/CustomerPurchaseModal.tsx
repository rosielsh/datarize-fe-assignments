import CalendarIcon from '@/shared/assets/icons/Calendar/Calendar';
import CustomerIcon from '@/shared/assets/icons/Customer/Customer';
import { formatAmount } from '../../formatters/formatAmount';
import PurchaseList from '../PurchaseList/PurchaseList';
import * as S from './CustomerPurchaseModal.styled';

type CustomerInfo = {
  id: number;
  name: string;
  code: number;
  count: number;
  totalAmount: number;
};

type Props = {
  customer: CustomerInfo;
};

const CustomerPurchaseModal = ({ customer }: Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <S.CustomerName>{customer.name}</S.CustomerName>
          <S.CustomerId>고객 ID: {customer.code}</S.CustomerId>
          <S.MetricsContainer>
            <S.Metric>
              <CustomerIcon />
              <S.MetricText>총 구매</S.MetricText>
              <S.MetricValue>{customer.count}개</S.MetricValue>
            </S.Metric>
            <S.Metric>
              <CalendarIcon />
              <S.MetricText>총 금액</S.MetricText>
              <S.MetricValue>{formatAmount(customer.totalAmount)}</S.MetricValue>
            </S.Metric>
          </S.MetricsContainer>
        </S.HeaderContent>
      </S.Header>

      <S.Content>
        <S.SectionTitle>구매 내역</S.SectionTitle>
        <PurchaseList customerId={customer.id} />
      </S.Content>
    </S.Container>
  );
};

export default CustomerPurchaseModal;
