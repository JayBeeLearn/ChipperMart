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
import { FaBaby } from "react-icons/fa";

function Babies() {
  const [products, setProducts] = useState(data);

  const filterProduct = products
    .filter((product) => product.category == "babies")
    .slice(0, 3);
  return (
    <div>
      <h1>Babies {<FaBaby />} </h1>
      <Content filterProduct={filterProduct} />
      <Content filterProduct={filterProduct} />
    </div>
  );
}

export default Babies;
