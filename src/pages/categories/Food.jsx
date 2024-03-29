import React, { useContext, useEffect, useMemo } from "react";
import { FaSearch, FaApple } from "react-icons/fa";
import { useState } from "react";

import Content from "../../Contents";

import data from "../../assets/Data";

import "../../styling/ContentLayout.css";
// import { SearchContext } from "../../App";
import { useGlobalContext } from "../../context";

function Food({}) {
  // const [products, setProducts] = useState(data);
  const { products } = useGlobalContext();

  let filterProduct;

  let { isApplyFilter, applyFilter, setApplyFilter, setIsApplyFilter } =
    useGlobalContext();
  const categoryProduct = products.filter(
    (product) => product.category == "food"
  );
  setIsApplyFilter(false);

  if (isApplyFilter) {
    filterProduct = applyFilter;
  } else {
    filterProduct = categoryProduct;
  }

  return (
    <>
      <h1>
        Food Page <FaApple />
      </h1>
      <Content filterProduct={filterProduct} />
    </>
  );
}

export default Food;
