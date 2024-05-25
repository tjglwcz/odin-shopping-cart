import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Root } from "./routes/root";
import { Products } from "./routes/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "products",
        element: <Navigate replace to="all" />,
      },
      {
        path: "products/all",
        element: <Products category="all" />,
      },
      {
        path: "products/electronics",
        element: <Products category="electronics" />,
      },
      {
        path: "products/jewelery",
        element: <Products category="jewelery" />,
      },
      {
        path: "products/men's clothing",
        element: <Products category="men's clothing" />,
      },
      {
        path: "products/women's clothing",
        element: <Products category="women's clothing" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
