import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Main/Home/Home";
import HousePage from "../../pages/Main/Home/HousePage/HousePage";
import Shifting from "../../pages/Main/Shifting/Shifting";
import ErrorPage from "@/layouts/Main/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/house/:id",
        element: <HousePage />,
      },
      {
        path: "/shifting",
        element: <Shifting />,
      },
    ],
  },
]);
