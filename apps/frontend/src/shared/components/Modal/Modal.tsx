import type { ReactNode } from 'react';
import { useEffect } from 'react';
import * as S from './Modal.styled';
import ModalPortal from './ModalPortal';
import { useModal } from './useModal';

type Props = {
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  width?: string;
  height?: string;
};

const Modal = ({ title, children, onClose, width = '600px', height = 'auto' }: Props) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    closeModal();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <ModalPortal>
      <S.Backdrop onClick={handleBackdropClick}>
        <S.ModalContainer $width={width} $height={height}>
          <S.ModalHeader>
            <S.HeaderSpacer />
            {title && <S.ModalTitle>{title}</S.ModalTitle>}
            <S.CloseButton onClick={handleClose} aria-label="Close modal">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </S.CloseButton>
          </S.ModalHeader>
          <S.ModalContent>{children}</S.ModalContent>
        </S.ModalContainer>
      </S.Backdrop>
    </ModalPortal>
  );
};

export default Modal;
