import { useEffect, useState } from "react";
import React, { createContext } from "react";
import { FaSearch } from "react-icons/fa";
// import { searchContext } from "./layout/Upper";

import "../src/styling/ContentLayout.css";

// LAYOUTS
import {
  MainLayout,
  CategoriesLayout,
  AuthLayout,
  ProfileLayout,
  ProductLayout,
  MyCartLayout,
  CheckoutLayout,
  PolicyLayout,
  SearchLayout,
} from "./layout";

// PAGES
import {
  Homepage,
  AboutUs,
  ContactUs,
  Faq,
  Product,
  productLoader,
} from "./pages";

// AUTH PAGES
import { Login, SignUp } from "./pages/auth";

// CATEGORIES PAGES

import {
  Food,
  Babies,
  Cleaning,
  Drinks,
  Household,
  Snacks,
  Toiletries,
  Vegetables,
} from "./pages/categories";

// PROFILE PAGES
import {
  AccountInfo,
  DeliveryAddress,
  OrderHistory,
  SavedItems,
  RecentlyViewed,
  Inbox,
  Logout,
  AddAddress,
  AnAddress,
  OpenOrders,
  CloseOrders,
  OrderDetails,
  TrackOrder,
} from "./pages/profile";

// POLICY PAGES
import { Terms, Privacy, Return, Cookies } from "./pages/policy";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

// pages

import Query from "./pages/search/Query";

// export const SearchContext = createContext();


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="categories" element={<CategoriesLayout />}>
          <Route index element={<Food />} />
          <Route index path="food" element={<Food />} />
          <Route path="babies" element={<Babies />} />
          <Route path="cleaning" element={<Cleaning />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="household" element={<Household />} />
          <Route path="snacks" element={<Snacks />} />
          <Route path="toiletries" element={<Toiletries />} />
          <Route path="vegetables" element={<Vegetables />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="profile" element={<ProfileLayout />}>
          <Route index path="account-info" element={<AccountInfo />} />
          <Route path="delivery-address" element={<DeliveryAddress />}>
            <Route index element={<AnAddress />} />
            <Route path="add-delivery-address" element={<AddAddress />} />
          </Route>
          <Route path="order-history" element={<OrderHistory />}>
            <Route index element={<OpenOrders />} />
            <Route path="close-orders" element={<CloseOrders />} />

            <Route path="order-details/:order_id" element={<OrderDetails />} />
            <Route path="track-order/:id" element={<TrackOrder />} />
          </Route>
          <Route path="saved-items" element={<SavedItems />} />
          <Route path="recently-viewed" element={<RecentlyViewed />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route
          path="product"
          element={<ProductLayout />}
          loader={productLoader}
        >
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="mycart" element={<MyCartLayout />} />
        <Route path="checkout" element={<CheckoutLayout />} />
        <Route path="policy" element={<PolicyLayout />}>
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="return-policy" element={<Return />} />
          <Route path="cookies-policy" element={<Cookies />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/query" element={<SearchLayout />}>
          <Route path=":query" element={<Query />} />
        </Route>
      </Route>
    )
  );
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
