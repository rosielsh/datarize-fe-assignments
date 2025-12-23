import styled from '@emotion/styled';

export const EmptyText = styled.div`
  text-align: center;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
