import CalendarIcon from '@/shared/assets/icons/Calendar/Calendar';
import { formatDate } from '@/shared/formatters/formatDate';
import { formatAmount } from '../../formatters/formatAmount';
import type { Purchase } from '../../types/customer';
import * as S from './PurchaseListItem.styled';

type Props = {
  purchase: Purchase;
};

const PurchaseListItem = ({ purchase }: Props) => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default PurchaseListItem;
