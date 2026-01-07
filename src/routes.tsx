import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Lazy load components
const NamaoHome = lazy(() => import('./pages/NamaoHome'));
const Namao_Story = lazy(() => import('./pages/Namao_Story'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <NamaoHome />
  },
  {
    path: '/story',
    element: <Namao_Story />
  },
];