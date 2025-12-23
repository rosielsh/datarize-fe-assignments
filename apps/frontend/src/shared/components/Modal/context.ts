import type { ReactNode } from 'react';
import { createContext } from 'react';

type ModalOptions = {
  title?: string;
  width?: string;
  height?: string;
  onClose?: () => void;
};

export type ModalContextValue = {
  openModal: (content: ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);
