import { useState } from 'react';

type SortOrder = 'asc' | 'desc' | null;

type UseSortReturn = {
  sortOrder: SortOrder;
  handleSort: () => void;
  resetSort: () => void;
};

export const useSort = (): UseSortReturn => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const handleSort = () => {
    if (sortOrder === null) {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder(null);
    }
  };

  const resetSort = () => {
    setSortOrder(null);
  };

  return { sortOrder, handleSort, resetSort };
};
