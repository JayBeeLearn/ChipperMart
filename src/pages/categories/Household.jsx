import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";

import Content from "../../Contents";

// links
import { Link, NavLink } from "react-router-dom";

// icons
import { FaBaby, FaTable } from "react-icons/fa";

function Household() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "household")
    .slice(0, 3);

  // console.log(filterProduct);
  return (
    <div>
      <h1>Household {<FaTable />}</h1>
      <Content filterProduct={filterProduct} />
    </div>
  );
}

export default Household;
