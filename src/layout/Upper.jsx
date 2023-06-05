import React from "react";
import { FaSearch, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import "../styling/layout.css";
import Logo from "../images/logo.png";

import { Link } from "react-router-dom";

function Upper() {
  return (
      <section className="hero">
        <section id="top" className="top">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="search">
            <div className="searchbox">
              <input type="text" placeholder="I am looking for ..." />
              <span id="searchBtn">
                <FaSearch />
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>

          <div className="user">
            <span id="myAccount">
              <Link to={"profile/account-info"}>
                My Account <FaChevronDown />
              </Link>
            </span>
            <span id="myCart">
              <Link to={'mycart'}>
                My Cart <FaShoppingCart />
              </Link>
            </span>
          </div>
        </section>
      </section>
  );
}

export default Upper;
