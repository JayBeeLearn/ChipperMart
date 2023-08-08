import React from "react";
import { FaBars, FaChevronDown, FaShoppingCart } from "react-icons/fa";
import Logo from "../images/logo-white.png";
import { useGlobalContext } from "../context";

import "../styling/layout.css";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showBar, setShowBar] = useState(false);
  const { user, logIn } = useGlobalContext();

  return (
    <section className="hero">
      <nav>
        <div className={` bg-primary_blue py-4  //navbar`} id="navbar">
          <div className="xs:flex sm:hidden navbar-control  px-4">
            {/* <input type="checkbox" className="checkbox" id="checkbox" /> */}

            <div className="w-[30%] flex justify-between items-center //small-nav-image">
              <Link to={"/"}>
                <img src={Logo} alt="" className="w-[100%] object-contain" />
              </Link>
            </div>

            <div className="w-[60%] flex text-sm  justify-end">
              <span className="my-auto">
                {user.length === 1 ? (
                  <span id="myAccount">
                    <Link
                      className="bg-primary_orange text-white rounded py-2 px-6"
                      to={"profile/account-info"}
                    >
                      {username} <FaChevronDown className="ml-1" />
                    </Link>
                  </span>
                ) : (
                  <span id="myAccount">
                    <Link className="my-auto" to={"auth/login"}>
                      Sign In
                    </Link>
                  </span>
                )}
              </span>
              <span
                id="myCart"
                className="bg-primary_orange py-[10px] px-[15px] rounded-[7px] mx-2 my-auto "
              >
                <Link to={"mycart"} className="text-white">
                  Cart <FaShoppingCart />
                </Link>
              </span>

              <label
                htmlFor="togglenav"
                className="text-white text-[24px] px-3 pt-2 //navbar-toggle"
                onClick={() => {
                  setShowBar((showBar) => !showBar);
                  const nav = document.getElementById("navlinks");

                  nav.classList.toggle("showbar");

                  // alert()
                }}
              >
                <FaBars />
              </label>
            </div>
          </div>

          <div
            id="navContent"
            className=" h-fit xs:py-1 sm:py-4  flex items-center justify-between bg-primary_blue //nav-contents"
          >
            <ul
              className={` sm:w-[100%] absolute div_padding   sm:items-center ${
                showBar
                  ? "left-0 top-24  bg-primary_blue "
                  : "-left-[400px] sm:left-0 top-24"
              }  transit sm:flex sm:justify-between xs:w-3/5 text-base sm:text-[13px] md:text-base //nav-links`}
              id="navlinks"
            >
              <li className="nav-item all-category">
                <Link
                  className="all_category"
                  id="allcategory"
                  onClick={() => {
                    const sidebar = document.getElementById("sidebar");

                    sidebar.classList.toggle("show");
                  }}
                >
                  All Categories <FaBars />
                </Link>
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
