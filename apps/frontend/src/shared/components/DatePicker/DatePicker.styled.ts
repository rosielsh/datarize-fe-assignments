import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: #ffffff;
  color: #374151;
  font-size: 14px;
  min-width: 140px;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: #9ca3af;
  }
`;

export const DateInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: #374151;
  font-size: 14px;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Separator = styled.span`
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  z-index: 1000;
`;
