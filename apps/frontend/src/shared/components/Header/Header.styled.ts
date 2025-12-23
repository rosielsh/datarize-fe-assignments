import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid #e5e7eb;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  line-height: 1.5;
`;
