// routes.js
import React from 'react';
import Example from './pages/Example';

const routes = [
  {
    path: '/',
    element: <Example />,
    exact: true,
  },
  // {
  //   path: '/about',
  //   element: () => <About />,
  // },
];

export default routes;
