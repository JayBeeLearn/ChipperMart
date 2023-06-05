import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";



import Content from "../../Contents";


// icons
import { FaBaby, FaHandsWash } from "react-icons/fa";

function Cleaning() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "toiletries");
  return (
    <div>
      <h1>Cleaning {<FaHandsWash />} </h1>

      <Content filterProduct={filterProduct} />
    </div>
  );
}

export default Cleaning;
