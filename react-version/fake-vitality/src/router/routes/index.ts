import { lazy } from 'react';

export interface IRoute {
  path: string;
  component: any;
  layout?: string;
  meta?: object;
  exact?: boolean;
  className?: string;
  appLayout?: any;
}

// ** Default Route
const DefaultRoute = '/react';

// ** Merge Routes
const Routes = [
  {
    path: '/react',
    component: lazy(() => import('../../views/React'))
  },
  {
    path: '/vue',
    component: lazy(() => import('../../views/Vue'))
  },
  {
    path: '/angular',
    component: lazy(() => import('../../views/Angular'))
  },
  {
    path: '/blazor',
    component: lazy(() => import('../../views/Blazor'))
  },
  {
    path: '/electron',
    component: lazy(() => import('../../views/Electron'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, Routes }
