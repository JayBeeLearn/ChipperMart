import React, { useState, useContext } from "react";
import { FaSearch, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { SearchContext } from "../App";
// import "../styling/layout.css";
import Logo from "../images/logo.png";

import { Link } from "react-router-dom";
import data from "../assets/Data";


function Upper() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState(data)

  const {searchQuery, setSearchQuery} = useContext(SearchContext)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // setQuery(e.target.value)
  //   setSearchQuery(query)

  //   const searchProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())||product.category.toLowerCase().includes(query.toLowerCase()));

  //   console.log(searchProducts);
    
  // }
  return (
    <section className="hero h-14">
      <section
        id="top"
        className="hidden sm:flex flex-row justify-between items-center my-4 mx-0 div_padding  w-[100%] //top"
      >
        <div className="w-[15%] //logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[100%] object-contain" />
          </Link>
        </div>
        {/* {searchQuery} */}
        <div className="w-[25%] sm:w-[40%] md:w-[50%] lg:w-[50%] search">
          <div>
            <form
              action=""
              className="flex justify-between items-center border-blue-700 border-[1px] rounded-md h-[40px] py-2 pl-2 //searchbox"
            >
              <input
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                value={query}
                placeholder="I am looking for ..."
                className="w-[100%] border-none text-base outline-none bg-transparent"
              />
              <Link to={`/query/${query}`} type="submit" id="searchBtn">
                <button
                  // onClick={handleSubmit}
                  className="bg-blue-900 py-[10px] px-[15px] h-[40px] text-white rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none"
                >
                  <FaSearch />
                </button>
                {/* <i className="fas fa-search"></i> */}
              </Link>
            </form>
          </div>
          {/* {query} */}
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
