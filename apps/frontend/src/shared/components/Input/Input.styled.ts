import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.gray};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.bg.white};
  transition: all linear 0.2s;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.blue.main};
    outline-offset: 1.5px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.placeholder};
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.sub};
  font-size: ${({ theme }) => theme.fontSize.sm};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }
`;
