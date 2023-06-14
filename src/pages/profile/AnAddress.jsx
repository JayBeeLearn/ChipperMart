import React, { useState } from "react";
import address from "../../assets/Address";
import EachAddress from "./EachAddress";
import { Link } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";

function AnAddress() {
    const [userAddress, setUserAddress] = useState(address);

  return (
      
    <>
      
        <div className="address-top">
          <h3 className="text-left">Delivery Address</h3>
          <div className="add-btn">
            <Link to={"add-delivery-address"}>
              {" "}
              <FaAddressBook /> Add New Address
            </Link>
          </div>
        </div>
        <hr />
        <div className="user-address">
          {userAddress.slice(0, 4).map((address) => {
            return <EachAddress key={address.id} {...address} />;
          })}
        </div>
      </>
    );
}

export default AnAddress;



