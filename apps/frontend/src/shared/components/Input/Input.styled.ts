import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 0.8rem;
  background-color: #ffffff;
  transition: all linear 0.2s;

  &:focus-within {
    outline: 2px solid #3b82f6;
    outline-offset: 1.5px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  flex-shrink: 0;
  margin-right: 8px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  color: #374151;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }
`;
