import styled from '@emotion/styled';

export const Container = styled.div`
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
