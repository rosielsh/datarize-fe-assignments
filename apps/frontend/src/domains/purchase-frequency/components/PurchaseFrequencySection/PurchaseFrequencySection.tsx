import BarChart from '@/shared/components/BarChart/BarChart';
import Calendar from '@/shared/components/Calendar/Calendar';
import DateInput from '@/shared/components/DateInput/DateInput';
import Loading from '@/shared/components/Loading/Loading';
import { formatDate } from '@/shared/formatters/formatDate';
import { useState } from 'react';
import { formatRange } from '../../formatters/formatRange';
import { useCalendarState } from '../../hooks/useCalendarState';
import { usePurchaseFrequency } from '../../hooks/usePurchaseFrequency';
import * as S from './PurchaseFrequencySection.styled';

const PurchaseFrequencySection = () => {
  const [startDate, setStartDate] = useState<string>('2024-07-01');
  const [endDate, setEndDate] = useState<string>('2024-07-31');
  const { isOpen, selectType, open, close } = useCalendarState();

  const { data, isLoading } = usePurchaseFrequency({
    from: startDate,
    to: endDate,
  });

  const handleDateClick = (date: string) => {
    if (selectType === 'start') {
      setStartDate(date);
    } else if (selectType === 'end') {
      setEndDate(date);
    }
    close();
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
          <DateInput date={startDate} onInputClick={() => open('start')} />
          <S.Separator>~</S.Separator>
          <DateInput date={endDate} onInputClick={() => open('end')} />
          {isOpen && (
            <S.CalendarWrapper>
              <Calendar
                startDate={startDate}
                endDate={endDate}
                onDateClick={handleDateClick}
                selectionMode={selectType}
              />
            </S.CalendarWrapper>
          )}
        </S.DateRangeContainer>
      </S.Header>

      {isLoading ? (
        <Loading />
      ) : (
        <BarChart data={data} xAxisKey="range" barKey="count" formatXAxisLabel={formatRange} />
      )}
    </S.Container>
  );
};

export default PurchaseFrequencySection;
