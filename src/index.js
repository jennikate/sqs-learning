/* eslint-disable react/jsx-filename-extension */
/* istanbul ignore file */
/* above leaves this file out of the jest test coverage check as we can't test index.js */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import {
  LANDING_URL,
  DASHBOARD_URL,
  LIST_GO_URL,
  RETRIEVE_URL,
  SIGN_IN_URL
} from './Constants/AppUrlConstants';
import App from './App';
import Dashboard from './Pages/Dashboard';
import ErrorGeneric from './Pages/ErrorGeneric';
import RetrieveAMessage from './Pages/RetreieveAMessage';
import ListYes from './Pages/ListYes';
import SignIn from './Pages/SignIn';
import Item from './Pages/ItemPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorGeneric />,
    children: [
      {
        index: true, // <-- match on parent, i.e. "/"
        element: <Navigate to={LANDING_URL} replace /> // <-- redirect
      },
      {
        path: DASHBOARD_URL,
        element: <Dashboard />
      },
      {
        path: RETRIEVE_URL,
        element: <RetrieveAMessage />
      },
      {
        path: `${RETRIEVE_URL}/:ItemId`,
        element: <Item />
      },
      {
        path: LIST_GO_URL,
        element: <ListYes />
      },
      {
        path: `${LIST_GO_URL}/:ItemId`,
        element: <Item />
      },
      {
        path: SIGN_IN_URL,
        element: <SignIn />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
