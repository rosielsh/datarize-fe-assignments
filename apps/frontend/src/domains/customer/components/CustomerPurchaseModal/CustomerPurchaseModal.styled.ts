import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

export const PurchaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PurchaseItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const PurchaseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductName = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const PurchaseDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #6b7280;
`;

export const PurchasePrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 40px;
  color: #6b7280;
  font-size: 14px;
`;

export const EmptyText = styled.div`
  text-align: center;
  padding: 40px;
  color: #6b7280;
  font-size: 14px;
`;
