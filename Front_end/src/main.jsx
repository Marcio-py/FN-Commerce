import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductList from "./pages/ProductList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/carrinho",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/lista",
    element: <ProductList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
