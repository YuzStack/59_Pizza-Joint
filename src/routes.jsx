import App from './components/App';
import Base from './components/Base';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Order from './components/Order';
import Toppings from './components/Toppings';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/base',
        element: <Base />,
      },
      {
        path: '/toppings',
        element: <Toppings />,
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
];

export default routes;
