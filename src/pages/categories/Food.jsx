import React from "react";
import { FaSearch, FaApple } from "react-icons/fa";
import { useState } from "react";

import Content from "../../Contents";

import data from "../../assets/Data";

import "../../styling/ContentLayout.css";



function Food({}) {
  const [products, setProducts] = useState(data);

  // console.log(products);
  
  const filterProduct = products
  .filter((product) => product.category == "food");
  
  const categoryItems = ["all", ...new Set(filterProduct.map((item) => item.subcategory))];
  
  console.log(filterProduct);

  return (
    <>
      <h1>
        Food Page <FaApple />
      </h1>
      <Content filterProduct={filterProduct}  />
    </>
  );
}

export default Food;
