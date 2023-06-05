import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";



import Content from "../../Contents";

// links

// icons
import { FaBaby } from "react-icons/fa";

function Babies() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "babies");
  return (
    <div>
      <h1>Babies {<FaBaby />} </h1>
      <Content filterProduct={filterProduct} />
      <Content filterProduct={filterProduct} />
    </div>
  );
}

export default Babies;
