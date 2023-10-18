import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function RootPhones() {
  return (
    <Fragment>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootPhones;
