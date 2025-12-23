import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const DateInfo = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

export const DateRangeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Separator = styled.span`
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
