import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";

import Content from "../../Contents";


// icons
import { FaBaby, FaTable } from "react-icons/fa";

function Household() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "household");

  // console.log(filterProduct);
  return (
    <>
      <h1>Household {<FaTable />}</h1>
      <Content filterProduct={filterProduct} />
    </>
  );
}

export default Household;
