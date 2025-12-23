import styled from '@emotion/styled';

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
`;

export const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #374151;
  line-height: 1.5;
`;
