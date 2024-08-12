import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { GlobalStateProvider } from './context/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/Index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },

  {
    path: '/cart',
    element: <Cart/>
  }
]);

root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>
);

