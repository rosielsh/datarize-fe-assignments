import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

const ModalPortal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    const newModalRoot = document.createElement('div');
    newModalRoot.id = 'modal-root';
    document.body.appendChild(newModalRoot);
    return createPortal(children, newModalRoot);
  }

  return createPortal(children, modalRoot);
};

export default ModalPortal;
