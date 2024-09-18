import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// REACT ROUTER ------------------------------------------------
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES -------------------------------------------------------
import Root from "./routes/Root";
import Proyecto from './routes/Proyecto';
import PerfilProyecto from './routes/PerfilProyecto';
import Contenido from './routes/Contenido';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/proyecto",
    element: <Proyecto />,
    children: [
      {
        path: "/proyecto/:proyectId",
        element: <PerfilProyecto />,
        children : [
          {
            path: "/proyecto/:proyectId/:contenId",
            element: <Contenido />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

