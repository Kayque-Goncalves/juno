import React from 'react';
import ReactDOM from 'react-dom/client';

import {Home, Login, Signup} from '../../../juno-application/my-app/src/pages'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './global.css'
import {PlayerContextProvider} from "./contexts/player-context";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/home',
    element: <Home />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <RouterProvider router={router} />
    </PlayerContextProvider>
  </React.StrictMode>
);
