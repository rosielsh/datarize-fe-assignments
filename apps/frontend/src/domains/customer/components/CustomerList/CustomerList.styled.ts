import styled from '@emotion/styled';

export const TableCell = styled.td`
  padding: 12px ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.main};
`;
