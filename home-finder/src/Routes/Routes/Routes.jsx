import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Main/Home/Home";
import HousePage from "../../pages/Main/Home/HousePage/HousePage";
import Shifting from "../../pages/Main/Shifting/Shifting";
import ErrorPage from "@/layouts/Main/ErrorPage";
import ProductsPage from "@/pages/Main/Products/ProductsPage";
import Designers from "@/pages/Main/Designers/Designers";
import Account from "@/pages/Main/Account/Account";
import PersionalInfo from "@/components/Main/AccountPage/PersionalInfo";
import Properties from "@/components/Main/AccountPage/Properties";

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
      {
        path: "/decor",
        element: <ProductsPage />,
      },
      {
        path: "/designers",
        element: <Designers />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/account/personal-info",
        element: <PersionalInfo />,
      },
      {
        path: "/account/properties",
        element: <Properties />,
      },
    ],
  },
]);
