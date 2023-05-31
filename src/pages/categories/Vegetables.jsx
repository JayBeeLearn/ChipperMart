import React, { useState } from "react";

import "../../styling/ContentLayout.css";

import data from "../../assets/Data";

import Content from "../../Contents";

// links
import { Link, NavLink } from "react-router-dom";

// icons
import { FaBaby, FaLeaf } from "react-icons/fa";

function Vegetables() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "vegetables")
    .slice(0, 3);
  return (
    <div>
      <h1>Vegetables {<FaLeaf />}</h1>

      <Content filterProduct={filterProduct} />
    </div>
  );
}

export default Vegetables;
