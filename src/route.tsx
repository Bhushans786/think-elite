import React, { FC, Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';

const Loadable = (Component: FC) => (props: any) => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Component {...props} />
    </Suspense>
  );
};

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import('./pages/auth/login/Login')));
const Otp = Loadable(lazy(() => import('./pages/auth/otp/Otp')));

//  * HOME PAGE
const Home = Loadable(lazy(() => import('./pages/home/Home')));

const routes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'otp',
    element: <Otp />,
  },
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;
