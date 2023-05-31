import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";

//navs
import Upper from "../../layout/Upper";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/footer";

import Content from "../../Contents";

// links
import { Link, NavLink } from "react-router-dom";

// icons
import { FaBaby, FaHandsWash } from "react-icons/fa";

function Cleaning() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "toiletries")
    .slice(0, 3);
  return (
    <div>
      <h1>Cleaning {<FaHandsWash />} </h1>

      <Content filterProduct={filterProduct} />
    </div>
  );
}

export default Cleaning;
