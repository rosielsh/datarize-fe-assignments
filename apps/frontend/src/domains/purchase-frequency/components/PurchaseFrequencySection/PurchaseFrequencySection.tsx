import BarChart from '@/shared/components/BarChart/BarChart';
import DatePicker from '@/shared/components/DatePicker/DatePicker';
import { useState } from 'react';
import { formatDate } from '../../formatters/formatDate';
import { formatRange } from '../../formatters/formatRange';
import * as S from './PurchaseFrequencySection.styled';

const PurchaseFrequencySection = () => {
  const [startDate, setStartDate] = useState<string>('2024-07-01');
  const [endDate, setEndDate] = useState<string>('2024-07-31');

  const handleDateRangeChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
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
