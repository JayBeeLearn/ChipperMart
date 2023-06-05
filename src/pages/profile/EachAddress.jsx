import React from "react";
import { FaEdit, FaLocationArrow, FaPhone, FaRemoveFormat, FaUser } from "react-icons/fa";

function EachAddress({ id, user, location, contact }) {
  return (
    <>
      <div className="each-address">
        <div className="control-btns">
          <div className="delete">
            <button> <FaRemoveFormat /> Delete</button>
          </div>

          <div className="edit">
            <button> <FaEdit /> Edit</button>
          </div>
              </div>
              <hr />
        <p>
          {" "}
          <FaUser /> {user}{" "}
        </p>
        <p>
          {" "}
          <FaLocationArrow /> {location}{" "}
        </p>
        <p>
          {" "}
          <FaPhone /> {contact}{" "}
        </p>
      </div>
    </>
  );
}

export default EachAddress;
