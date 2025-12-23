import Empty from '@/shared/components/Empty/Empty';
import Loading from '@/shared/components/Loading/Loading';
import { useCustomers } from '../../hooks/useCustomers';
import type { Customer, CustomerParams } from '../../types/customer';
import CustomerItem from '../CustomerItem/CustomerItem';
import * as S from './CustomerList.styled';

type Props = {
  params?: CustomerParams;
  onCustomerClick: (customer: Customer) => void;
};

const CustomerList = ({ params, onCustomerClick }: Props) => {
  const { data, isLoading } = useCustomers(params);

  if (isLoading) {
    return (
      <S.TableCell colSpan={4}>
        <Loading />
      </S.TableCell>
    );
  }

  if (data.length === 0) {
    return (
      <S.TableCell colSpan={4}>
        <Empty message="고객 데이터가 없습니다." />
      </S.TableCell>
    );
  }

  return (
    <>
      {data.map((customer) => (
        <CustomerItem key={customer.id} customer={customer} onClick={onCustomerClick} />
      ))}
    </>
  );
};

export default CustomerList;
