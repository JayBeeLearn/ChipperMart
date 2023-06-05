import React from "react";

import { Link, NavLink } from "react-router-dom";

import "../styling/Category.css";
import { Outlet } from "react-router-dom";

function CategoriesLayout() {
  // console.log(Outlet);
  return (
    <>
      <h2>Categories</h2>
      <div className="categories">
        <div className="side">
          <h2 className="title">Category</h2>
          <nav>
            <ul>
              <li>
                <Link to={"/categories/food"}>Food</Link>
              </li>
              <li>
                <Link to={"/categories/vegetables"}>Vegetable</Link>
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

          <hr />
          <h2 className="title">Price</h2>
          <form action>
            <li>
              <input type="radio" name="price" />
              Under N2,000
            </li>
            <li>
              <input type="radio" name="price" />
              N2,000 - N5,000
            </li>

            <li>
              <input type="radio" name="price" />
              N5,000 - N10,000
            </li>

            <li>
              <input type="radio" name="price" />
              N10,000 - N20,000
            </li>

            <li>
              <input type="radio" name="price" />
             Above N40,000
            </li>
          </form>
        </div>
        <div className="category-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default CategoriesLayout;
