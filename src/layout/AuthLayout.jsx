import React from "react";

import "../styling/Auth.css";
import { NavLink, Outlet } from "react-router-dom";

import Cart from "../../src/images/cart.png";

function AuthLayout() {
  return (
    <section className="login">
      <div className="login-form">
        <p>Hi, welcome</p>

        <span className="sign-in-btn">
          <NavLink to={"login"} className="btn">
            Login
          </NavLink>

          <NavLink to={"signup"} className="btn">
            Sign Up
          </NavLink>
        </span>

        <div className="form">
          <Outlet />
        </div>
      </div>

      <div className="login-img">
        <div className="login-image">
          <img src={Cart} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
