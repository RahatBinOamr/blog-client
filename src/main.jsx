import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import { store } from './redux/store.jsx';
import { router } from './router/Router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <React.StrictMode>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </React.StrictMode>
    </RouterProvider>
  </Provider>
);
