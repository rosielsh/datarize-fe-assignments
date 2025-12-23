import CalendarIcon from '@/shared/assets/icons/Calendar/Calendar';
import CustomerIcon from '@/shared/assets/icons/Customer/Customer';
import { formatDate } from '@/shared/formatters/formatDate';
import { useCustomerPurchases } from '../../hooks';
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
  const { data: purchases, isLoading } = useCustomerPurchases(customer.id);

  const formatAmount = (amount: number): string => {
    return `₩${amount.toLocaleString()}`;
  };

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
              <S.MetricValue>
                {customer.count}개 ({purchases.length}건)
              </S.MetricValue>
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
        {isLoading ? (
          <S.LoadingText>로딩 중...</S.LoadingText>
        ) : purchases.length === 0 ? (
          <S.EmptyText>구매 내역이 없습니다.</S.EmptyText>
        ) : (
          <S.PurchaseList>
            {purchases.map((purchase) => (
              <S.PurchaseItem key={purchase.id}>
                <S.ProductImage src={purchase.imgSrc} alt={purchase.product} />
                <S.PurchaseInfo>
                  <S.ProductName>
                    {purchase.product} | {purchase.quantity}개
                  </S.ProductName>
                  <S.PurchaseDate>
                    <CalendarIcon />
                    {formatDate(purchase.date)}
                  </S.PurchaseDate>
                  <S.PurchasePrice>{formatAmount(purchase.price)}</S.PurchasePrice>
                </S.PurchaseInfo>
              </S.PurchaseItem>
            ))}
          </S.PurchaseList>
        )}
      </S.Content>
    </S.Container>
  );
};

export default CustomerPurchaseModal;
