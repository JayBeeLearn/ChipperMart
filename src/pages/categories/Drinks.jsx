import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";

import Content from "../../Contents";

// icons
import { FaBaby, FaBeer } from "react-icons/fa";

function Drinks() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "drinks");
  return (
    <div>
      <h1>Drinks {<FaBeer />} </h1>
      <Content filterProduct={filterProduct} />
    </div>
  );
}

export default Drinks;
