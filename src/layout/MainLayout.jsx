import React from "react";

// import Upper from "./Upper";
import Upper from './Upper'
// import Navbar from "./Navbar";
import NavBar from './Navbar'
// import Footer from "./footer";
import Footer from './Footer'
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="w-[100%]">
      <div className="top">
        <Upper />
        <NavBar />
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
