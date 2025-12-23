import ChevronDownIcon from '@/shared/assets/icons/ChevronDown/ChevronDown';
import ChevronUpIcon from '@/shared/assets/icons/ChevronUp/ChevronUp';
import LocalErrorBoundary from '@/shared/components/ErrorBoundary/boundaries/LocalErrorBoundary';
import Input from '@/shared/components/Input/Input';
import { useModal } from '@/shared/components/Modal/useModal';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useState } from 'react';
import { useSort } from '../../hooks/useSort';
import type { Customer } from '../../types/customer';
import CustomerList from '../CustomerList/CustomerList';
import CustomerPurchaseModal from '../CustomerPurchaseModal/CustomerPurchaseModal';
import * as S from './CustomerRankingSection.styled';

const CustomerRankingSection = () => {
  const [inputValue, setInputValue] = useState('');
  const searchQuery = useDebounce(inputValue, 500);
  const { sortOrder, handleSort, resetSort } = useSort();
  const { openModal } = useModal();

  const handleCustomerClick = (customer: Customer) => {
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
          <Input value={inputValue} onChange={setInputValue} placeholder="고객 이름 검색..." />
        </S.SearchWrapper>
      </S.Header>
      <LocalErrorBoundary
        onRetry={() => {
          resetSort();
          setInputValue('');
        }}
      >
        <S.Table>
          <S.TableHead>
            <S.TableRow>
              <S.TableHeader>ID</S.TableHeader>
              <S.TableHeader>이름</S.TableHeader>
              <S.TableHeader>구매 횟수</S.TableHeader>
              <S.TableHeader>
                <S.SortButton type="button" onClick={handleSort}>
                  총 구매 금액
                  <S.IconWrapper>
                    {sortOrder === 'asc' && <ChevronUpIcon />}
                    {sortOrder === 'desc' && <ChevronDownIcon />}
                  </S.IconWrapper>
                </S.SortButton>
              </S.TableHeader>
            </S.TableRow>
          </S.TableHead>
          <S.TableBody>
            <CustomerList
              params={{
                name: searchQuery,
                sortBy: sortOrder,
              }}
              onCustomerClick={handleCustomerClick}
            />
          </S.TableBody>
        </S.Table>
      </LocalErrorBoundary>
    </S.Container>
  );
};

export default CustomerRankingSection;
