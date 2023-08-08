import React, { useState, useContext } from "react";
// import { SearchContext } from "../../App";
import { useGlobalContext } from "../../context";

import "../../styling/ContentLayout.css";

import data from "../../assets/Data";

import Content from "../../Contents";

// icons
import { FaBaby, FaLeaf } from "react-icons/fa";

function Vegetables() {
  // const [products, setProducts] = useState(data);
  const { products } = useGlobalContext();

  let { isApplyFilter, applyFilter, setApplyFilter, setIsApplyFilter } =
    useGlobalContext();
  const categoryProduct = products.filter(
    (product) => product.category == "vegetables"
  );

  let filterProduct;

  if (isApplyFilter) {
    filterProduct = applyFilter;
  } else {
    filterProduct = categoryProduct;
  }
  return (
    <>
      <h1>Vegetables {<FaLeaf />}</h1>

      <Content filterProduct={filterProduct} />
    </>
  );
}

export default Vegetables;
