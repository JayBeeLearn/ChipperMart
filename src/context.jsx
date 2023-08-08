import React, { useContext, useState, useEffect, useReducer } from "react";
import data from "./assets/Data";
import reducer from "./reducer";

const AppContext = React.createContext();

//  to check and get users from local storage
const getLocalStorage = () => {
  let usersa = localStorage.getItem("clipUsers");
  if (usersa) {
    return JSON.parse(localStorage.getItem("clipUsers"));
  } else {
    return [];
  }
};

// initial state of the app
const initialState = {
  products: data,
  items: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWishlist = (id) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: id });
  };

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.products]);

  const [searchQuery, setSearchQuery] = useState(null);

  const [filterOptions, setFilterOptions] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [applyFilter, setApplyFilter] = useState([]);
  const [isApplyFilter, setIsApplyFilter] = useState(false);

  const [users, setUsers] = useState(getLocalStorage);
  const [logIn, setLogIn] = useState(false);
  const [user, setUser] = useState([]);

  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    localStorage.setItem("clipUsers", JSON.stringify(users));
  }, [users]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        addToWishlist,
        addToCart,
        increase,
        decrease,
        searchQuery,
        setSearchQuery,
        filterOptions,
        setFilterOptions,
        categoryProducts,
        setCategoryProducts,
        applyFilter,
        setApplyFilter,
        isApplyFilter,
        setIsApplyFilter,
        user,
        setUser,
        users,
        setUsers,
        firstname,
        setFirstname,
        surname,
        setSurname,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        password,
        setpassword,
        logIn,
        setLogIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
