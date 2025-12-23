import ChevronLeftIcon from '@/shared/assets/icons/ChevronLeft/ChevronLeft';
import ChevronRightIcon from '@/shared/assets/icons/ChevronRight/ChevronRight';
import {
  formatDateString,
  getDaysInMonth,
  getFirstDayOfWeek,
  getYearMonthDay,
} from '@/shared/utils/dateUtils';
import { useEffect, useState } from 'react';
import * as S from './RangeCalendar.styled';

export type Props = {
  startDate: string;
  endDate: string;
  onDateClick: (date: string) => void;
  selectionMode: 'start' | 'end' | null;
};

type YearMonthDay = {
  year: number;
  month: number;
  day: number;
};

const RangeCalendar = ({ startDate, endDate, onDateClick, selectionMode }: Props) => {
  const getInitialMonth = () => {
    if (selectionMode === 'start' && startDate) {
      const { year, month } = getYearMonthDay(startDate);
      return { year, month };
    }
    if (selectionMode === 'end' && endDate) {
      const { year, month } = getYearMonthDay(endDate);
      return { year, month };
    }
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  };

  const [currentMonth, setCurrentMonth] = useState(getInitialMonth);

  useEffect(() => {
    if (selectionMode === 'start' && startDate) {
      const { year, month } = getYearMonthDay(startDate);
      setCurrentMonth({ year, month });
    } else if (selectionMode === 'end' && endDate) {
      const { year, month } = getYearMonthDay(endDate);
      setCurrentMonth({ year, month });
    }
  }, [selectionMode, startDate, endDate]);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev.month === 1) {
        return { year: prev.year - 1, month: 12 };
      }
      return { year: prev.year, month: prev.month - 1 };
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev.month === 12) {
        return { year: prev.year + 1, month: 1 };
      }
      return { year: prev.year, month: prev.month + 1 };
    });
  };

  const getCalendarDays = (): YearMonthDay[] => {
    const { year, month } = currentMonth;
    const startDateOfWeek = getFirstDayOfWeek(year, month);
    const daysInMonth = getDaysInMonth(year, month);
    const days: YearMonthDay[] = [];

    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    for (let i = 0; i < startDateOfWeek; i++) {
      days.push({
        year: prevYear,
        month: prevMonth,
        day: daysInPrevMonth - startDateOfWeek + i + 1,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ year, month, day: i });
    }

    const totalDays = days.length;
    const weeks = Math.ceil(totalDays / 7);
    const remainingDays = weeks * 7 - totalDays;

    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;

    for (let i = 1; i <= remainingDays; i++) {
      days.push({ year: nextYear, month: nextMonth, day: i });
    }

    return days;
  };

  const isDateInRange = (dateString: string): boolean => {
    if (!startDate || !endDate) return false;
    return dateString >= startDate && dateString <= endDate;
  };

  const isDateSelected = (dateString: string): boolean => {
    if (!startDate && !endDate) return false;
    if (startDate && dateString === startDate) return true;
    if (endDate && dateString === endDate) return true;
    return false;
  };

  const isCurrentMonth = (day: YearMonthDay): boolean => {
    return day.year === currentMonth.year && day.month === currentMonth.month;
  };

  const isDateDisabled = (dateString: string): boolean => {
    if (selectionMode === 'start') {
      if (endDate && dateString > endDate) {
        return true;
      }
      return false;
    }

    if (selectionMode === 'end') {
      if (startDate && dateString < startDate) {
        return true;
      }
      return false;
    }
    return false;
  };

  const calendarDays = getCalendarDays();
  const monthNames = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.NavButton type="button" onClick={handlePrevMonth}>
          <ChevronLeftIcon />
        </S.NavButton>
        <S.MonthYear>
          {currentMonth.year}년 {monthNames[currentMonth.month - 1]}
        </S.MonthYear>
        <S.NavButton type="button" onClick={handleNextMonth}>
          <ChevronRightIcon />
        </S.NavButton>
      </S.CalendarHeader>

      <S.Weekdays>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <S.Weekday key={day}>{day}</S.Weekday>
        ))}
      </S.Weekdays>

      <S.CalendarGrid>
        {calendarDays.map((day, index) => {
          const dateString = formatDateString(day.year, day.month, day.day);
          const isSelected = isDateSelected(dateString);
          const inRange = isDateInRange(dateString);
          const isOtherMonth = !isCurrentMonth(day);
          const isDisabled = isDateDisabled(dateString);

          if (isDisabled) {
            return (
              <S.CalendarDayDisabled key={index} disabled>
                {day.day}
              </S.CalendarDayDisabled>
            );
          }

          if (isSelected) {
            return (
              <S.CalendarDaySelected
                key={index}
                onClick={() => onDateClick(dateString)}
                isOtherMonth={isOtherMonth}
              >
                {day.day}
              </S.CalendarDaySelected>
            );
          }

          if (inRange) {
            return (
              <S.CalendarDayInRange
                key={index}
                onClick={() => onDateClick(dateString)}
                isOtherMonth={isOtherMonth}
              >
                {day.day}
              </S.CalendarDayInRange>
            );
          }

          if (isOtherMonth) {
            return (
              <S.CalendarDayOtherMonth key={index} onClick={() => onDateClick(dateString)}>
                {day.day}
              </S.CalendarDayOtherMonth>
            );
          }

          return (
            <S.CalendarDay key={index} onClick={() => onDateClick(dateString)}>
              {day.day}
            </S.CalendarDay>
          );
        })}
      </S.CalendarGrid>
    </S.CalendarContainer>
  );
};

export default RangeCalendar;
