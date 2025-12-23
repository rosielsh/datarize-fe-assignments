import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';
import Modal from './Modal';
import { ModalContext } from './context';

type ModalOptions = {
  title?: string;
  width?: string;
  height?: string;
  onClose?: () => void;
};

type ModalState = {
  isOpen: boolean;
  content: ReactNode | null;
  options: ModalOptions;
};

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    content: null,
    options: {},
  });

  const openModal = useCallback((content: ReactNode, options: ModalOptions = {}) => {
    setModalState({
      isOpen: true,
      content,
      options,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));

    setTimeout(() => {
      setModalState({
        isOpen: false,
        content: null,
        options: {},
      });
    }, 300);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalState.isOpen && (
        <Modal
          title={modalState.options.title}
          width={modalState.options.width}
          height={modalState.options.height}
          onClose={modalState.options.onClose}
        >
          {modalState.content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};
