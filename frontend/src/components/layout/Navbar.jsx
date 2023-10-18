import React from "react";
import clasess from "./Navbar.module.css";
import MainNavigation from "./MainNavigation";
function Navbar() {
  return (
    <div className={clasess.header}>
      <h1>Mobile Technology Store</h1>

      <MainNavigation />
    </div>
  );
}

export default Navbar;
