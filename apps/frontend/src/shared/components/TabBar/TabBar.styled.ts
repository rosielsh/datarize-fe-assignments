import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  background-color: #f3f4f6;
  padding: 4px;
  border-radius: 8px;
`;

export const TabItem = styled.button<{ isActive: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background-color: ${({ isActive }) => (isActive ? '#ffffff' : 'transparent')};
  box-shadow: ${({ isActive }) => (isActive ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? '#374151' : '#9ca3af')};

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#e5e7eb')};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const IconWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isActive }) => (isActive ? '#374151' : '#9ca3af')};
  transition: color 0.2s ease-in-out;
`;

export const Label = styled.span`
  white-space: nowrap;
`;
