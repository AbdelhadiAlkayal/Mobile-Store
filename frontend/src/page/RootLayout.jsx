import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default RootLayout;
