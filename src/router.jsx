// routes.js
import React from 'react';
import Test from './Pages/Test';

const routes = [
  {
    path: '/',
    element: <Test />,
    exact: true,
  },
  // {
  //   path: '/about',
  //   element: () => <About />,
  // },
];

export default routes;
