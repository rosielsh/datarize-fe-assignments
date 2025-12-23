import ChevronLeftIcon from '@/shared/assets/icons/ChevronLeft/ChevronLeft';
import ChevronRightIcon from '@/shared/assets/icons/ChevronRight/ChevronRight';
import { useState } from 'react';
import * as S from './Calendar.styled';

export type CalendarProps = {
  startDate?: Date | null;
  endDate?: Date | null;
  onDateClick: (date: Date) => void;
  initialMonth?: Date;
  selectionMode?: 'start' | 'end';
};

const Calendar = ({
  startDate,
  endDate,
  onDateClick,
  initialMonth,
  selectionMode,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (initialMonth) {
      return new Date(initialMonth.getFullYear(), initialMonth.getMonth(), 1);
    }
    const date = startDate || new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDateOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    const days: Date[] = [];

    const prevMonthLastDay = new Date(year, month, 0);
    const daysInPrevMonth = prevMonthLastDay.getDate();

    for (let i = 0; i < startDateOfWeek; i++) {
      days.push(new Date(year, month - 1, daysInPrevMonth - startDateOfWeek + i + 1));
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    const totalDays = days.length;
    const weeks = Math.ceil(totalDays / 7);
    const remainingDays = weeks * 7 - totalDays;

    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  };

  const isDateInRange = (date: Date): boolean => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isDateSelected = (date: Date): boolean => {
    if (!startDate && !endDate) return false;
    if (startDate && isSameDay(date, startDate)) return true;
    if (endDate && isSameDay(date, endDate)) return true;
    return false;
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const isDateDisabled = (date: Date): boolean => {
    if (selectionMode === 'start') {
      if (endDate && date > endDate) {
        return true;
      }
      return false;
    }
    if (selectionMode === 'end') {
      if (startDate && date < startDate) {
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
          {currentMonth.getFullYear()}년 {monthNames[currentMonth.getMonth()]}
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
        {calendarDays.map((date, index) => {
          const isSelected = isDateSelected(date);
          const inRange = isDateInRange(date);
          const isOtherMonth = !isCurrentMonth(date);
          const isDisabled = isDateDisabled(date);

          if (isDisabled) {
            return (
              <S.CalendarDayDisabled key={index} disabled>
                {date.getDate()}
              </S.CalendarDayDisabled>
            );
          }

          if (isSelected) {
            return (
              <S.CalendarDaySelected
                key={index}
                onClick={() => onDateClick(date)}
                isOtherMonth={isOtherMonth}
              >
                {date.getDate()}
              </S.CalendarDaySelected>
            );
          }

          if (inRange) {
            return (
              <S.CalendarDayInRange
                key={index}
                onClick={() => onDateClick(date)}
                isOtherMonth={isOtherMonth}
              >
                {date.getDate()}
              </S.CalendarDayInRange>
            );
          }

          if (isOtherMonth) {
            return (
              <S.CalendarDayOtherMonth key={index} onClick={() => onDateClick(date)}>
                {date.getDate()}
              </S.CalendarDayOtherMonth>
            );
          }

          return (
            <S.CalendarDay key={index} onClick={() => onDateClick(date)}>
              {date.getDate()}
            </S.CalendarDay>
          );
        })}
      </S.CalendarGrid>
    </S.CalendarContainer>
  );
};

export default Calendar;
