import styled from '@emotion/styled';

type SpinnerProps = {
  size: 'small' | 'medium' | 'large';
};

const sizeMap = {
  small: '20px',
  medium: '32px',
  large: '48px',
};

export const Spinner = styled.div<SpinnerProps>`
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
  border: 3px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

