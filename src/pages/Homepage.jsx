import React, { useState, useContext } from "react";
// import { SearchContext } from "../App";
import { useGlobalContext } from "../context";

import { FaHome } from "react-icons/fa";

import AdImage from "../images/adimage.jpg";
import Easter from "../images/easter.png";
import Exclusive from "../images/exclusive.png";

import Content from "../Contents";
import data from "../assets/Data";

import "../styling/ContentLayout.css";
import "../styling/Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  // const [products, setProducts] = useState(data);
  const { searchQuery, products } = useGlobalContext();

  const filterProduct = products.filter((product) => product.id).slice(0, 6);

  // console.log(filterProduct);

  return (
    <div className="homepage">

      <div className="w-full flex justify-between my-4 md:h-[21rem] //section">
        <div className="w-[72%] //advert">
          <div className="image">
            <img src={AdImage} alt="Ad Image" />
          </div>
        </div>
        <div className="w-[27%] //side">
          <div className=" //topside">
            <div className="">
              <img src={Easter} alt="" />
            </div>
          </div>
          <div className=" //bottomside">
            <div className="">
              <img src={Exclusive} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex relative justify-between h-12">
        <div className="absolute left-0 bg-primary_blue  rounded-tr-[10px] rounded-br-[10px] //hotdeal">
          <h3 className="text-2xl text-white py-2 px-6">Hot Deal </h3>
        </div>
        <p className="z-50 absolute right-4 float-right">
          <Link> see more</Link>
        </p>
      </div>
      <div>
        <Content filterProduct={filterProduct} />
        {/* <Content filterProduct={filterProduct} /> */}
      </div>
    </div>
  );
}

export default Homepage;
