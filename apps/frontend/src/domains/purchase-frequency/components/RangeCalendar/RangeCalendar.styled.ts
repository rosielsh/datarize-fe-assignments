import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bg.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
  min-width: 320px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xs};
`;

export const MonthYear = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.main};
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.light};
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border.lightGray};
    color: ${({ theme }) => theme.colors.text.main};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.border.gray};
  }
`;

export const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Weekday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
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
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border.lightGray};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.border.gray};
  }
`;

export const CalendarDayOtherMonth = styled(CalendarDay)`
  color: #d1d5db;
`;

export const CalendarDaySelected = styled(CalendarDay)`
  background-color: ${({ theme }) => theme.colors.blue.main};
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue.dark};
  }

  &:active {
    background-color: #1d4ed8;
  }
`;

export const CalendarDayInRange = styled(CalendarDay)`
  background-color: #dbeafe;
  color: #1e40af;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

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
