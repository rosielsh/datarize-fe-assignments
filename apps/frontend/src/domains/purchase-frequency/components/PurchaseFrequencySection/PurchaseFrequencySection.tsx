import BarChart from '@/shared/components/BarChart/BarChart';
import Calendar from '@/shared/components/Calendar/Calendar';
import DateInput from '@/shared/components/DateInput/DateInput';
import { useState } from 'react';
import { formatDate } from '../../formatters/formatDate';
import { formatRange } from '../../formatters/formatRange';
import { usePurchaseFrequency } from '../../hooks';
import * as S from './PurchaseFrequencySection.styled';

const PurchaseFrequencySection = () => {
  const [startDate, setStartDate] = useState<string>('2024-07-01');
  const [endDate, setEndDate] = useState<string>('2024-07-31');
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [selectType, setSelectType] = useState<'start' | 'end' | null>(null);

  const { data, isLoading } = usePurchaseFrequency({
    from: startDate,
    to: endDate,
  });

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
        <div>로딩 중...</div>
      ) : (
        <BarChart data={data} xAxisKey="range" barKey="count" formatXAxisLabel={formatRange} />
      )}
    </S.Container>
  );
};

export default PurchaseFrequencySection;
