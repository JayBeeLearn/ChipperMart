import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";

import Content from "../../Contents";



// icons
import { FaBaby, FaToilet } from "react-icons/fa";

function Toiletries() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "toiletries");
  return (
    <>
      <h1>Toiletries {<FaToilet />}</h1>
      <Content filterProduct={filterProduct} />
    </>
  );
}

export default Toiletries;
