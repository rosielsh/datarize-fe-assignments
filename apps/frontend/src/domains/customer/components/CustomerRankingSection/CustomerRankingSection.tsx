import ChevronDownIcon from '@/shared/assets/icons/ChevronDown/ChevronDown';
import ChevronUpIcon from '@/shared/assets/icons/ChevronUp/ChevronUp';
import Input from '@/shared/components/Input/Input';
import { useModal } from '@/shared/components/Modal/useModal';
import { useState } from 'react';
import { useCustomers } from '../../hooks';
import CustomerPurchaseModal from '../CustomerPurchaseModal/CustomerPurchaseModal';
import * as S from './CustomerRankingSection.styled';

type SortField = 'id' | 'totalAmount';
type SortOrder = 'asc' | 'desc' | null;

const CustomerRankingSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const { openModal } = useModal();

  const {
    data: customers,
    isLoading,
    error,
  } = useCustomers({
    name: searchQuery || undefined,
    sortBy: sortField === 'totalAmount' ? sortOrder || undefined : undefined,
  });

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      if (sortOrder === null) {
        setSortOrder('asc');
      } else if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else {
        setSortOrder(null);
      }
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const formatAmount = (amount: number): string => {
    return `₩${amount.toLocaleString()}`;
  };

  const handleCustomerClick = (customer: {
    id: number;
    name: string;
    count: number;
    totalAmount: number;
  }) => {
    const customerInfo = {
      id: customer.id,
      name: customer.name,
      code: customer.id,
      count: customer.count,
      totalAmount: customer.totalAmount,
    };
    openModal(<CustomerPurchaseModal customer={customerInfo} />, {
      title: '고객 구매 내역',
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>고객 구매 순위</S.Title>
        </S.TitleWrapper>
        <S.SearchWrapper>
          <Input value={searchQuery} onChange={setSearchQuery} placeholder="고객 이름 검색..." />
        </S.SearchWrapper>
      </S.Header>

      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>ID</S.TableHeader>
            <S.TableHeader>이름</S.TableHeader>
            <S.TableHeader>구매 횟수</S.TableHeader>
            <S.TableHeader>
              <S.SortButton type="button" onClick={() => handleSort('totalAmount')}>
                총 구매 금액
                <S.IconWrapper>
                  {sortField === 'totalAmount' && sortOrder === 'asc' && <ChevronUpIcon />}
                  {sortField === 'totalAmount' && sortOrder === 'desc' && <ChevronDownIcon />}
                </S.IconWrapper>
              </S.SortButton>
            </S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {isLoading ? (
            <S.TableRow>
              <S.TableCell colSpan={4}>로딩 중...</S.TableCell>
            </S.TableRow>
          ) : error ? (
            <S.TableRow>
              <S.TableCell colSpan={4}>고객 데이터가 없습니다.</S.TableCell>
            </S.TableRow>
          ) : (
            customers.map((customer) => (
              <S.TableRow key={customer.id} onClick={() => handleCustomerClick(customer)}>
                <S.TableCell>{customer.id}</S.TableCell>
                <S.TableCell>{customer.name}</S.TableCell>
                <S.TableCell>
                  <S.CountBadge>{customer.count}회</S.CountBadge>
                </S.TableCell>
                <S.TableCell>{formatAmount(customer.totalAmount)}</S.TableCell>
              </S.TableRow>
            ))
          )}
        </S.TableBody>
      </S.Table>
    </S.Container>
  );
};

export default CustomerRankingSection;
