import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const CustomerName = styled.h2`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: #111827;
`;

export const CustomerId = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #6b7280;
`;

export const MetricsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const Metric = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MetricText = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const MetricValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`;

export const Content = styled.div`
  padding-top: 24px;
  overflow-y: auto;
  flex: 1;
`;

export const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;
