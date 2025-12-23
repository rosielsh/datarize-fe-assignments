import { ModalProvider } from '@/shared/components/Modal/ModalContext';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  );
};

export default App;
