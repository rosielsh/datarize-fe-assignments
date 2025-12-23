import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  min-width: 320px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
`;

export const MonthYear = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: #6b7280;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  &:active {
    background-color: #e5e7eb;
  }
`;

export const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const Weekday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

type CalendarDayBaseProps = {
  isOtherMonth?: boolean;
};

export const CalendarDay = styled.button<CalendarDayBaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: #111827;
  font-size: 14px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  &:active {
    background-color: #e5e7eb;
  }
`;

export const CalendarDayOtherMonth = styled(CalendarDay)`
  color: #d1d5db;
`;

export const CalendarDaySelected = styled(CalendarDay)`
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }
`;

export const CalendarDayInRange = styled(CalendarDay)`
  background-color: #dbeafe;
  color: #1e40af;
  font-weight: 500;

  &:hover {
    background-color: #bfdbfe;
  }

  &:active {
    background-color: #93c5fd;
  }
`;

export const CalendarDayDisabled = styled(CalendarDay)`
  color: #d1d5db;
  cursor: not-allowed;
  opacity: 0.5;

  &:hover {
    background-color: transparent;
  }

  &:active {
    background-color: transparent;
  }
`;
