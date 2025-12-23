import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.border.lightGray};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const TabItem = styled.button<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 10px ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: 6px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.bg.white : 'transparent')};
  box-shadow: ${({ isActive, theme }) => (isActive ? theme.shadow.sm : 'none')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.text.sub : theme.colors.text.placeholder};

  &:hover {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.bg.white : theme.colors.border.gray};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const IconWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.text.sub : theme.colors.text.placeholder};
  transition: color 0.2s ease-in-out;
`;

export const Label = styled.span`
  white-space: nowrap;
`;
