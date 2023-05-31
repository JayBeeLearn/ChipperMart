import React from "react";

import Upper from "./Upper";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="container">
      <div className="top">
        <Upper />
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
