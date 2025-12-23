import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.bg.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.main};
`;

export const SearchWrapper = styled.div`
  width: 300px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.border.lightGray};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.bg.gray};
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 12px ${({ theme }) => theme.spacing.md};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.sub};
  background-color: ${({ theme }) => theme.colors.bg.gray};

  &:last-child {
    width: 200px;
    min-width: 200px;
  }
`;

export const SortButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.sub};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  cursor: pointer;
  padding: 0;
  justify-content: flex-start;

  &:hover {
    color: ${({ theme }) => theme.colors.text.main};
  }
`;

export const IconWrapper = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;
