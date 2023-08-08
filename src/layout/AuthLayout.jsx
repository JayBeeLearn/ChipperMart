import React from "react";

import "../styling/Auth.css";
import { NavLink, Outlet } from "react-router-dom";

import Cart from "../../src/images/cart.png";

function AuthLayout() {
  return (
    <section className="sm:flex justify-between content-center //login ">
      <div className="sm:w-[45%] h-[90%] py-[10px] px-5 bg-white  border-r-[10px] //login-form">
        <p>Hi, welcome</p>

        <span className="sign-in-btn">
          <NavLink
            to={"login"}
            className="bg-transparent text-xl border-none rounded py-2 px-2 hover:text-white hover:bg-primary_orange //btn "
          >
            Login
          </NavLink>

          <NavLink
            to={"signup"}
            className="bg-transparent text-xl border-none rounded py-2 px-2 hover:text-white hover:bg-primary_orange  //btn"
          >
            Sign Up
          </NavLink>
        </span>

        <div className="form">
          <Outlet />
        </div>
      </div>

      <div className="sm:w-[45%] flex justify-between content-center my-auto //login-img">
        <div className="login-image">
          <img src={Cart} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
