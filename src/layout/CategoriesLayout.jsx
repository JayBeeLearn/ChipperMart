import React, { useContext } from "react";
import data from "../assets/Data";

import { Link, NavLink } from "react-router-dom";

import "../styling/Category.css";
import { Outlet } from "react-router-dom";
// import { SearchContext } from "../App";
import { useGlobalContext } from "../context";

function CategoriesLayout() {
  // console.log(Outlet);

  const { filterOptions, categoryProducts, setApplyFilter, setIsApplyFilter } =
    useGlobalContext();
  const pro = categoryProducts.map((item) => {
    return item;
  });

  const subCatFilter = categoryProducts;
  // console.log(categoryProducts);
  // console.log('fil.' + filterOptions);
  return (
    <>
      <h2>Categories</h2>
      {/* {filterOptions} */}
      <div className="categories">
        <div className="hidden sm:block side">
          <h2 className="title">Category</h2>

          <nav>
            <ul className="mx-4">
              {filterOptions.map((category, index) => {
                return (
                  <li key={index}>
                    <span
                      onClick={() => {
                        let filter;
                        category == "all"
                          ? (filter = subCatFilter)
                          : (filter = subCatFilter.filter(
                              (item) => item.subcategory == category
                            ));
                        setApplyFilter(filter);
                        // setIsApplyFilter(true);
                        // console.log(filter);
                      }}
                      className="bg-transparent hover:text-primary_orange font-bold cursor-pointer capitalize px-6"
                    >
                      {category}
                    </span>
                  </li>
                );
              })}
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
