import CalendarIcon from '@/shared/assets/icons/Calendar/Calendar';
import { useEffect, useRef, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import * as S from './DatePicker.styled';

export type Props = {
  startDate?: Date | null;
  endDate?: Date | null;
  onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void;
};

type SelectionMode = 'start' | 'end' | null;

const DatePicker = ({ startDate, endDate, onDateRangeChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectionMode, setSelectionMode] = useState<SelectionMode>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: Date | null | undefined): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const handleDateClick = (date: Date) => {
    if (selectionMode === 'start') {
      onDateRangeChange(date, endDate ?? null);
      setIsOpen(false);
    } else if (selectionMode === 'end') {
      if (startDate && date < startDate) {
        onDateRangeChange(date, startDate);
      } else {
        onDateRangeChange(startDate ?? null, date);
      }
      setIsOpen(false);
    }
  };

  const handleStartDateClick = () => {
    if (isOpen && selectionMode === 'start') {
      setIsOpen(false);
      setSelectionMode(null);
    } else {
      setIsOpen(true);
      setSelectionMode('start');
    }
  };

  const handleEndDateClick = () => {
    if (isOpen && selectionMode === 'end') {
      setIsOpen(false);
      setSelectionMode(null);
    } else {
      setIsOpen(true);
      setSelectionMode('end');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectionMode(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getInitialMonth = () => {
    if (selectionMode === 'start') {
      return startDate || new Date();
    }
    if (selectionMode === 'end') {
      return endDate || startDate || new Date();
    }
    return startDate || new Date();
  };

  return (
    <S.Container ref={containerRef}>
      <S.DateRangeContainer>
        <S.DateInputWrapper onClick={handleStartDateClick}>
          <CalendarIcon />
          <S.DateInput type="text" value={formatDate(startDate)} readOnly placeholder="시작 날짜" />
        </S.DateInputWrapper>
        <S.Separator>~</S.Separator>
        <S.DateInputWrapper onClick={handleEndDateClick}>
          <CalendarIcon />
          <S.DateInput type="text" value={formatDate(endDate)} readOnly placeholder="종료 날짜" />
        </S.DateInputWrapper>
      </S.DateRangeContainer>

      {isOpen && selectionMode && (
        <S.CalendarWrapper>
          <Calendar
            startDate={startDate}
            endDate={endDate}
            onDateClick={handleDateClick}
            initialMonth={getInitialMonth()}
            selectionMode={selectionMode}
          />
        </S.CalendarWrapper>
      )}
    </S.Container>
  );
};

export default DatePicker;
