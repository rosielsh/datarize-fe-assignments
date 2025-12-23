import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.border.lightGray};
`;

export const TabBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 8.5rem);
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
`;
