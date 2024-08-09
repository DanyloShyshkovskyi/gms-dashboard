import { Navigate } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import Layout from 'layout/index'
import { Login } from 'pages/Login'
import NotFound from 'pages/NotFound'

import { BASE_URL } from 'shared/config'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    breadcrumb: null,
    children: [
      {
        path: 'dashboard',
        lazy: () => import('pages/Dashboard'),
      },
      {
        path: 'bids',
        lazy: () => import('pages/Bids'),
        children: [
          {
            path: ':id',
            lazy: () => import('pages/Bid'),
          },
        ],
      },
      {
        path: 'projects',
        lazy: () => import('pages/Projects'),
      },
      {
        path: 'callback',
        element: <Navigate to={'/dashboard'} />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes, { basename: BASE_URL })
