import LoginScreen from './pages/LoginScreen';
import ExamplePageWrapper from './pages/LoginScreen';

const routes = [
  {
    path: '/',
    element: <LoginScreen />,
    exact: true,
  },
  // {
  //   path: '/about',
  //   element: () => <About />,
  // },
];

export default routes;
