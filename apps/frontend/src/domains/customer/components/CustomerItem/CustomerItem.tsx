import { formatAmount } from '../../formatters/formatAmount';
import type { Customer } from '../../types/customer';
import * as S from './CustomerItem.styled';

type Props = {
  customer: Customer;
  onClick: (customer: Customer) => void;
};

const CustomerItem = ({ customer, onClick }: Props) => {
  return (
    <S.TableRow onClick={() => onClick(customer)}>
      <S.TableCell>{customer.id}</S.TableCell>
      <S.TableCell>{customer.name}</S.TableCell>
      <S.TableCell>{customer.count}회</S.TableCell>
      <S.TableCell>{formatAmount(customer.totalAmount)}</S.TableCell>
    </S.TableRow>
  );
};

export default CustomerItem;
