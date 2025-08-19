import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { Contact } from './pages/Contact.jsx';
import { RoomsPage } from './pages/Rooms.jsx';
import { ThemeProvider } from './context/ThemeContext'; 
import './index.css';

// 1. Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component is now our layout
    children: [
      {
        index: true, // This makes HomePage the default child route
        element: <HomePage />,
      },
      {
        path: "contact", // Accessible at yoursite.com/contact
        element: <Contact />,
      },
      {
        path: "rooms",
        element: <RoomsPage />,
      },
      // You can add more pages here
      // {
      //   path: "about",
      //   element: <AboutPage />,
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);