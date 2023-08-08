import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
// import { SearchContext } from "../App";
import { useGlobalContext } from "../context";

function SearchLayout() {
    const {searchQuery} = useGlobalContext()
    // console.log(searchQuery);
  return (
    <>
      <div className="min-h-[0vh]">
        {/* <div className="">
          {searchQuery === null ? (
            <h4 className="text-3xl font-bold mt-16">
              Nothing to Display
              <br /> Input a search term and try again
            </h4>
          ): 'ghg'}
        </div> */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SearchLayout;
