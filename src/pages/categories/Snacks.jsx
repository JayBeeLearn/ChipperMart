import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";
import { useGlobalContext } from "../../context";

import Content from "../../Contents";



// icons
import { FaBaby, FaCookieBite } from "react-icons/fa";

function Snacks() {
  // const [products, setProducts] = useState(data);
  const { products } = useGlobalContext();


  const filterProduct = products
    .filter((product) => product.category == "snacks");
  return (
    <>
      <h1>Snacks {<FaCookieBite />}</h1>
      <Content filterProduct={filterProduct} />
    </>
  );
}

export default Snacks;
