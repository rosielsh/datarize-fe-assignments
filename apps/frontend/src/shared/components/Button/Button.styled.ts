import styled from '@emotion/styled';

type StyledButtonProps = {
  width?: string;
};

export const Button = styled.button<StyledButtonProps>`
  width: ${({ width }) => width || '100%'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #1f5af2;
  border: 1px solid #1f5af2;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
  min-height: 2.5rem;

  &:hover:not(:disabled) {
    background-color: #0d47d1;
    border-color: #0d47d1;
  }

  &:focus-visible {
    outline: 2px solid #1f5af2;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`;
