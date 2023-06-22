import React from "react";
import { FaSearch, FaShoppingCart, FaChevronDown } from "react-icons/fa";
// import "../styling/layout.css";
import Logo from "../images/logo.png";

import { Link } from "react-router-dom";

function Upper() {
  return (
    <section className="hero">
      <section
        id="top"
        className="hidden sm:flex flex-row justify-between items-center my-4 mx-0 div_padding  w-[100%] //top"
      >
        <div className="w-[15%] //logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[100%] object-contain" />
          </Link>
        </div>

        <div className="w-[25%] sm:w-[40%] md:w-[50%] lg:w-[50%] search">
          <div className="flex justify-between items-center border-blue-700 border-[1px] rounded-md h-[40px] py-2 pl-2 //searchbox">
            <input
              type="text"
              placeholder="I am looking for ..."
              className="w-[100%] border-none text-base outline-none bg-transparent"
            />
            <span
              id="searchBtn"
              className="bg-blue-900 py-[10px] px-[15px] h-[40px] text-white rounded-tr-md rounded-br-md"
            >
              <FaSearch />
              {/* <i className="fas fa-search"></i> */}
            </span>
          </div>
        </div>

        <div className="w-[25%] flex justify-end items-center text-sm sm:w-[30%] md:w-[25%]  //user">
          <span id="myAccount">
            <Link to={"profile/account-info"}>
              My Account <FaChevronDown className="ml-1" />
            </Link>
          </span>
          <span
            id="myCart"
            className="bg-primary_orange py-[10px] px-[15px] rounded-[7px] ml-2 "
          >
            <Link to={"mycart"} className="text-white">
              My Cart <FaShoppingCart />
            </Link>
          </span>
        </div>
      </section>
    </section>
  );
}

export default Upper;
