import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Logo from "../images/logo-white.png";


import "../styling/layout.css";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section className="hero">
      <nav>
        <div className="navbar" id="navbar">
          <div className="navbar-control">
            <div className="small-nav-image">
              <Link to={'/'}>
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div id="navContent" className="nav-contents">
            <ul className="nav-links" id="navlinks">
              <li className="nav-item all-category">
                <button
                  className="all_category"
                  id="allcategory"
                  onClick={() => {
                    const sidebar = document.getElementById("sidebar");

                    sidebar.classList.toggle("show");
                  }}
                >
                  All Categories <FaBars />
                </button>
              </li>

              <li className="nav-item">
                <NavLink to="/categories/food">
                  Food <FaChevronDown />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories/vegetables">
                  Vegetables <FaChevronDown />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories/household">
                  Household <FaChevronDown />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories/snacks">
                  Snacks <FaChevronDown />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories/drinks">
                  Drinks <FaChevronDown />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories/toiletries">
                  Toiletries <FaChevronDown />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories/babies">
                  Baby & Kids <FaChevronDown />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories/cleaning">
                  Cleaning <FaChevronDown />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-control">
            {/* <input type="checkbox" className="checkbox" id="checkbox" /> */}
            <label
              htmlFor="checkbox"
              className="navbar-toggle"
              onClick={() => {
                const nav = document.getElementById("navlinks");

                nav.classList.toggle("showbar");

                // alert()
              }}
            >
              <FaBars />
            </label>
          </div>
        </div>
      </nav>

      <div className="sidebar" id="sidebar">
        <nav>
          <ul>
            <li>
              <NavLink to={"/categories/food"}>Food</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/vegetables"}>Vegetable</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/household"}>Household</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/snacks"}>Snacks</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/drinks"}>Drinks</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/toiletries"}>Toiletries</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/babies"}>Babies</NavLink>
            </li>
            <li>
              <NavLink to={"/categories/cleaning"}>Cleaning</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
