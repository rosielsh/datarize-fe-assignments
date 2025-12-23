import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #111827;
`;

export const DateRange = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 400px;
`;
