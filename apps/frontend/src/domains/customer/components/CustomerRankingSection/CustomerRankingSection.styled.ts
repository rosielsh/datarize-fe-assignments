import styled from '@emotion/styled';

export const Container = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const SearchWrapper = styled.div`
  width: 300px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  background-color: #f9fafb;

  &:last-child {
    width: 200px;
    min-width: 200px;
  }
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #111827;
`;

export const SortButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: transparent;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  justify-content: flex-start;

  &:hover {
    color: #111827;
  }
`;

export const IconWrapper = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const CountBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
`;
