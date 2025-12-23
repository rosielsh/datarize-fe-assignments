import BarChart from '@/shared/components/BarChart/BarChart';
import Calendar from '@/shared/components/Calendar/Calendar';
import DateInput from '@/shared/components/DateInput/DateInput';
import { useState } from 'react';
import { formatDate } from '../../formatters/formatDate';
import { formatRange } from '../../formatters/formatRange';
import * as S from './PurchaseFrequencySection.styled';

const PurchaseFrequencySection = () => {
  const [startDate, setStartDate] = useState<string>('2024-07-01');
  const [endDate, setEndDate] = useState<string>('2024-07-31');
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectType, setSelectType] = useState<'start' | 'end' | null>(null);

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

  const handleInput = (type: 'start' | 'end') => {
    setIsOpenCalendar(true);
    setSelectType(type);
  };

  const handleDateClick = (date: string) => {
    if (selectType === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    setIsOpenCalendar(false);
    setSelectType(null);
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>가격대별 구매 빈도</S.Title>
          <S.DateInfo>
            {formatDate(startDate)} ~ {formatDate(endDate)} 기간의 데이터를 집계
          </S.DateInfo>
        </S.TitleWrapper>
        <S.DateRangeContainer>
          <DateInput date={startDate} onInputClick={() => handleInput('start')} />
          <S.Separator>~</S.Separator>
          <DateInput date={endDate} onInputClick={() => handleInput('end')} />
          {isOpenCalendar && (
            <S.CalendarWrapper>
              <Calendar startDate={startDate} endDate={endDate} onDateClick={handleDateClick} />
            </S.CalendarWrapper>
          )}
        </S.DateRangeContainer>
      </S.Header>

      <BarChart data={sampleData} xAxisKey="range" barKey="count" formatXAxisLabel={formatRange} />
    </S.Container>
  );
};

export default PurchaseFrequencySection;
