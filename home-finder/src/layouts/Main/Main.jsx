import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
