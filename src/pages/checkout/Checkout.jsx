import React from "react";
import CheckOutItem from "./CheckOutItem";

function Checkout({ savedForLater }) {
  // console.log(savedForLater);

  return (
    <>
      {savedForLater.map((checkOutItem) => {
        return <CheckOutItem key={checkOutItem.id} {...checkOutItem} />;
      })}
    </>
  );
}

export default Checkout;
