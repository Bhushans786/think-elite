import React, { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';

const Loadable = (Component: any) => (props: React.JSX.IntrinsicAttributes) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import('./components/auth/login/Login')));
const Otp = Loadable(lazy(() => import('./components/auth/otp/Otp')));

//  * HOME PAGE
const Home = Loadable(lazy(() => import('./components/pages/home/Home')));

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
    path: 'home',
    element: <Home />,
  },
];

export default routes;
