import { useState } from "react";
import React from "react";
import { FaSearch } from "react-icons/fa";

import "../src/styling/ContentLayout.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import Food from "./pages/categories/Food";
import Babies from "./pages/categories/Babies";
import Cleaning from "./pages/categories/Cleaning";
import Drinks from "./pages/categories/Drinks";
import Household from "./pages/categories/Household";
import Snacks from "./pages/categories/Snacks";
import Toiletries from "./pages/categories/Toiletries";
import Vegetables from "./pages/categories/Vegetables";
import MainLayout from "./layout/MainLayout";
import CategoriesLayout from "./layout/CategoriesLayout";
import Login from "./pages/auth/Login";
import AuthLayout from "./layout/AuthLayout";
import SignUp from "./pages/auth/SignUp";
import ProfileLayout from "./layout/ProfileLayout";
import AccountInfo from "./pages/profile/AccountInfo";
import DeliveryAddress from './pages/profile/DeliveryAddress'
import OrderHistory from './pages/profile/OrderHistory'
import SavedItems from './pages/profile/SavedItems'
import RecentlyViewed from './pages/profile/RecentlyViewed'
import Inbox from './pages/profile/Inbox'
import Logout from './pages/profile/Logout'
import ProductLayout from "./layout/ProductLayout";
import Product, { productLoader } from "./pages/Product";
import MyCartLayout from "./layout/MyCartLayout";
import CheckoutLayout from "./layout/CheckoutLayout";
import PolicyLayout from "./layout/PolicyLayout";
import Terms from "./pages/policy/Terms";
import Privacy from "./pages/policy/Privacy";
import Return from "./pages/policy/Return";
import Cookies from "./pages/policy/Cookies";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";

import { AddAddress } from "./pages/profile/DeliveryAddress";
import AnAddress from "./pages/profile/AnAddress";
import OpenOrders from "./pages/profile/OpenOrders";
import CloseOrders from "./pages/profile/CloseOrders";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="categories" element={<CategoriesLayout />}>
          <Route index path="food" element={<Food />} />
          <Route path="babies" element={<Babies />} />
          <Route path="cleaning" element={<Cleaning />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="household" element={<Household />} />
          <Route path="snacks" element={<Snacks />} />
          <Route path="toiletries" element={<Toiletries />} />
          <Route path="vegetables" element={<Vegetables />} />
        </Route>
        <Route path="auth" element={<AuthLayout />} >
          <Route index path="login" element={<Login />} />
          <Route  path="signup" element={<SignUp />} />
        </Route>
        <Route path="profile" element={<ProfileLayout />}>
          <Route index path="account-info" element={<AccountInfo />} />
          <Route path="delivery-address" element={<DeliveryAddress />}>
            <Route index element={<AnAddress />}/>
            <Route path="add-delivery-address" element={<AddAddress />} />
          </Route>
          <Route path="order-history" element={<OrderHistory />}>
            <Route index path="open-orders" element={<OpenOrders />} />
            <Route path="close-orders" element={<CloseOrders />} />

            <Route path="order-details" element={<OrderHistory />}/>
          </Route>
          <Route path="saved-items" element={<SavedItems />} />
          <Route path="recently-viewed" element={<RecentlyViewed />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="product" element={<ProductLayout />} loader={productLoader} >
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="mycart" element={<MyCartLayout />} />
        <Route path="checkout" element={<CheckoutLayout />} />
        <Route path="policy" element={<PolicyLayout />}>
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="return-policy" element={<Return />} />
          <Route path="cookies-policy" element={<Cookies />}/>
        </Route>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />}/>
      </Route>
    )
  );
  return (
    <main>
      {/* <Routes>
          <Route index element={<Homepage />} />
          <Route path="/categories/food" element={<Food />} />
          <Route path="/categories/babies" element={<Babies />} />
          <Route path="/categories/cleaning" element={<Cleaning />} />
          <Route path="/categories/drinks" element={<Drinks />} />
          <Route path="/categories/household" element={<Household />} />
          <Route path="/categories/snacks" element={<Snacks />} />
          <Route path="/categories/toiletries" element={<Toiletries />} />
          <Route path="/categories/vegetables" element={<Vegetables />} />
        </Routes> */}
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
