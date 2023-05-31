import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "../styling/Profile.css";
import { FaBicycle, FaEye, FaHeart, FaHistory, FaMailBulk, FaSignOutAlt, FaUser } from "react-icons/fa";

function ProfileLayout() {
  return (
    <>
      <h2>My Profile</h2>

      <section className="profile">
        <div className="profile-navigation">
          <li>
            <NavLink to={"account-info"}>
              {" "}
              {<FaUser />} Account Information{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"delivery-address"}>
              {" "}
              {<FaBicycle />} Delivery Address
            </NavLink>
          </li>
          <li>
            <NavLink to={"order-history"}>
              {" "}
              {<FaHistory />} Order History
            </NavLink>
          </li>
          <li>
            <NavLink to={"saved-items"}>
              {" "}
              {<FaHeart />} Saved Items{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"recently-viewed"}>
              {" "}
              {<FaEye />} Recently Viewed{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"inbox"}> {<FaMailBulk />} Inbox </NavLink>
          </li>
          <li>
            <NavLink to={"logout"}>
              {" "}
              {<FaSignOutAlt />} Logout{" "}
            </NavLink>
          </li>
        </div>

        <div className="profile-content">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default ProfileLayout;
