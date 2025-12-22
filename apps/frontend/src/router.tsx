import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <div>대시보드 페이지</div>,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
]);

export default router;
