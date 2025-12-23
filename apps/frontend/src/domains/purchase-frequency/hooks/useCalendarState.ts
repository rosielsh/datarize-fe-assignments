import { useState } from 'react';

type SelectType = 'start' | 'end' | null;

type UseCalendarStateReturn = {
  isOpen: boolean;
  selectType: SelectType;
  open: (type: SelectType) => void;
  close: () => void;
};

export const useCalendarState = (): UseCalendarStateReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectType, setSelectType] = useState<SelectType>(null);

  const open = (type: SelectType) => {
    setIsOpen(true);
    setSelectType(type);
  };

  const close = () => {
    setIsOpen(false);
    setSelectType(null);
  };

  return {
    isOpen,
    selectType,
    open,
    close,
  };
};
