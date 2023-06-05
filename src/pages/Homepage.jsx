import React, { useState } from "react";

import {  FaHome } from "react-icons/fa";

import AdImage from "../images/adimage.jpg";
import Easter from "../images/easter.png";
import Exclusive from "../images/exclusive.png";


import Content from "../Contents";
import data from "../assets/Data";

import "../styling/ContentLayout.css";
import "../styling/Homepage.css";

function Homepage() {
  const [products, setProducts] = useState(data);

  const filterProduct = products.filter((product) => product.id).slice(0, 8);

  console.log(filterProduct);

  return (
    <div className="homepage">
      <h1>
        Home Page <FaHome />
      </h1>
      <div className="section">
        <div className="advert">
          <div className="image">
            <img src={AdImage} alt="Ad Image" />
          </div>
        </div>
        <div className="side">
          <div className="topside">
            <div className="image">
              <img src={Easter} alt="" />
            </div>
          </div>
          <div className="bottomside">
            <div className="image">
              <img src={Exclusive} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hotdeal">
        <h3>Hot Deal </h3>
      </div>
      <Content filterProduct={filterProduct} />
      {/* <Content filterProduct={filterProduct} /> */}
    </div>
  );
}

export default Homepage;
