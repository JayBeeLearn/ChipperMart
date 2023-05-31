import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";

import "../styling/layout.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <section className="hero">
        <nav>
          <div className="navbar">
            <div id="navContent" className="nav-contents">
              <ul className="nav-links">
                <li className="nav-item">
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
                <NavLink to={'/categories/cleaning'}>Cleaning</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
