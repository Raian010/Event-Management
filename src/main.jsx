import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ServiceDetails from "./Components/Services/ServiceDetails";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ErrorPage from "./Components/Error/ErrorPage";
import { element } from "prop-types";
import SystemPage from "./Components/System/SystemPage";
import Important from "./Components/Important/Important";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/important",
        element: <PrivateRoute><Important></Important></PrivateRoute>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/system",
        element: <SystemPage></SystemPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
