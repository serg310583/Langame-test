import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { MainLayout } from '../layout/mainLayout';
import { Promo } from '../pages/Promo/Promo';
import { Register } from '../pages/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Promo />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);
