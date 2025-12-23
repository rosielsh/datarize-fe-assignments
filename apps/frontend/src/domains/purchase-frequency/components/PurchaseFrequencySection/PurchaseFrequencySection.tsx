import BarChart from '@/shared/components/BarChart/BarChart';
import DatePicker from '@/shared/components/DatePicker/DatePicker';
import { useState } from 'react';
import * as S from './PurchaseFrequencySection.styled';

const PurchaseFrequencySection = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date(2024, 6, 1));
  const [endDate, setEndDate] = useState<Date | null>(new Date(2024, 6, 31));

  const handleDateRangeChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const formatRange = (range: string | number): string => {
    const rangeStr = String(range);
    const parts = rangeStr.split(' - ');
    if (parts.length !== 2) return rangeStr;

    const start = parseInt(parts[0], 10);
    const end = parseInt(parts[1], 10);

    const formatAmount = (amount: number): string => {
      if (amount === 0) return '~';
      const 만원 = Math.floor(amount / 10000);
      if (만원 === 0) {
        return `${amount}원`;
      }
      return `${만원}만원`;
    };

    if (start === 0) {
      return `~${formatAmount(end)}`;
    }

    return `${formatAmount(start)}~${formatAmount(end)}`;
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const sampleData = [
    { range: '0 - 20000', count: 10 },
    { range: '20001 - 30000', count: 16 },
    { range: '30001 - 40000', count: 44 },
    { range: '40001 - 50000', count: 28 },
    { range: '50001 - 60000', count: 11 },
    { range: '60001 - 70000', count: 17 },
    { range: '70001 - 80000', count: 0 },
    { range: '80001 - 90000', count: 0 },
    { range: '90001 - 100000', count: 13 },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>가격대별 구매 빈도</S.Title>
          <S.DateInfo>
            {formatDate(startDate)} ~ {formatDate(endDate)} 기간의 데이터를 집계
          </S.DateInfo>
        </S.TitleWrapper>
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          onDateRangeChange={handleDateRangeChange}
        />
      </S.Header>

      <BarChart data={sampleData} xAxisKey="range" barKey="count" formatXAxisLabel={formatRange} />
    </S.Container>
  );
};

export default PurchaseFrequencySection;
