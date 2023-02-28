import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";

import './index.css'

import Root from "./routes/root";
import Home from "./routes/home";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Home />,
            },
            {
                path: "/orders",
                element: <div><h1>No orders</h1></div>,
            },
            {
                path: "/customers",
                element: <div><h1>No customers</h1></div>,
            },
 {
                path: "/transactions",
                element: <div><h1>No transactions</h1></div>,
            },

        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>,
)
