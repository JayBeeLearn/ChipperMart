import React from "react";
import AnAddress from "./AnAddress";
import { FaAddressBook, FaChevronCircleLeft } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

function DeliveryAddress() {
  return (
    <>
      <section className="delivery-address">
        <Outlet />
      </section>
    </>
  );
}

export default DeliveryAddress;

export function AddAddress() {
  return (
    <>
      <h3 className="text-left">
        {" "}
        <Link to={"/profile/delivery-address"}>
          {" "}
          <FaChevronCircleLeft />{" "}
        </Link>{" "}
        Add Delivery Address
      </h3>

      <div className="form-section">
        <form action="">
          <div className="name">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstame"
                placeholder="Enter first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                id="firstame"
                placeholder="Enter surname"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Mobile Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="Delivery Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="directions">Directions (Optional) </label>
            <input
              type="text"
              name="directions"
              id="directions"
              placeholder=" Directions (Optional) "
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City </label>
            <input type="text" name="city" id="city" placeholder=" City " />
          </div>

          <div className="form-group">
            <label htmlFor="state">State </label>
            <input type="text" name="state" id="state" placeholder=" State " />
          </div>

          <div className="form-group">
            <label htmlFor="lga">L. G. A. </label>
            <input type="text" name="lga" id="lga" placeholder=" L. G. A " />
          </div>

          <div className="form-group">
            <button>Continue</button>
          </div>
        </form>
      </div>
    </>
  );
}
