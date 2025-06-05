
import type { RouteObject } from 'react-router-dom';
import Dashboard from '@/modules/dashboard';
import FormBuilder from './modules/builder';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />
  },
    {
      path: '/form-builder',
      element: <FormBuilder />
    },
  //   {
  //     path: '/form-builder/:formId',
  //     element: <FormBuilder />
  //   }
];

// Optional: Export route paths as constants for type safety
export const ROUTE_PATHS = {
  HOME: '/',
  FORM_BUILDER: '/form-builder',
  FORM_BUILDER_WITH_ID: '/form-builder/:formId'
} as const;