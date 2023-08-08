import React, { useState } from "react";

import "../../styling/ContentLayout.css";
import data from "../../assets/Data";
import { useGlobalContext } from "../../context";



import Content from "../../Contents";


// icons
import { FaBaby, FaHandsWash } from "react-icons/fa";

function Cleaning() {
  // const [products, setProducts] = useState(data);
  const { products } = useGlobalContext();


  const filterProduct = products
    .filter((product) => product.category == "toiletries");
  return (
    <>
      <h1>Cleaning {<FaHandsWash />} </h1>

      <Content filterProduct={filterProduct} />
    </>
  );
}

export default Cleaning;
