import GlobalErrorBoundary from '@/shared/components/ErrorBoundary/boundaries/GlobalErrorBoundary';
import { ModalProvider } from '@/shared/components/Modal/ModalContext';
import { theme } from '@/shared/theme';
import { ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalErrorBoundary>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
