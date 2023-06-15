import React, { useState } from "react";

import "../../styling/ContentLayout.css";

import data from "../../assets/Data";

import Content from "../../Contents";



// icons
import { FaBaby, FaLeaf } from "react-icons/fa";

function Vegetables() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "vegetables");
  return (
    <>
      <h1>Vegetables {<FaLeaf />}</h1>

      <Content filterProduct={filterProduct} />
    </>
  );
}

export default Vegetables;
