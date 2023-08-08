import React, { useState, useContext } from "react";
import { FaSearch, FaShoppingCart, FaChevronDown } from "react-icons/fa";
// import { SearchContext } from "../App";
import { useGlobalContext } from "../context";
// import "../styling/layout.css";
import Logo from "../images/logo.png";

import { Link } from "react-router-dom";
import data from "../assets/Data";

function Upper() {
  const [query, setQuery] = useState("");
  // const { user, logIn } = useContext(SearchContext);
  const { user, logIn } = useGlobalContext()

  let username;

  user.length === 1 ? (username = user[0].firstname) : " ";

  // const username = user[0].firstname;

  return (
    <section className="hero h-14">
      <section
        id="top"
        className=" sm:flex flex-row justify-between items-center my-4 mx-0 div_padding  w-[100%] //top"
      >
        <div className="hidden sm:block sm:w-[15%]  //logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[100%] object-contain" />
          </Link>
        </div>
        {/* {searchQuery} */}
        <div className="w-[80%] m-auto sm:w-[40%] md:w-[50%] lg:w-[50%] search">
          <div>
            <form
              action=""
              className="flex justify-between items-center border-blue-700 border-[1px] rounded-md h-[40px] py-2 pl-2 //searchbox"
            >
              <input
                type="text"
                id="query"
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

        <div className="hidden sm:flex sm:w-[28%]  sm:justify-end items-center text-sm  md:w-[25%]  //user">
          {user.length === 1 ? (  <span id="myAccount">
              <Link
                className="bg-primary_orange text-white rounded py-2 px-6"
                to={"profile/account-info"}
              >
                {username} <FaChevronDown className="ml-1" />
              </Link>
            </span>
          
          ) : (
            <span id="myAccount">
              <Link to={"auth/login"}>Sign In</Link>
            </span>
          )}
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
