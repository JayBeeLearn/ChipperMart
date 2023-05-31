import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import '../styling/policy.css'

function PolicyLayout() {
  return (
    <>
      {/* <div className="page-title">
        <h2>Policies</h2>
      </div> */}
      <div className="policy-nav">
        <NavLink to={'terms-and-conditions'}>Terms and Conditions</NavLink>

        <NavLink to={'return-policy'} >Return Policy</NavLink>
        <NavLink to={'privacy-policy'} >Privacy Policy</NavLink>
        <NavLink to={'cookies-policy'} >Cookies Policy</NavLink>
          </div>
          <div className="policy">
              <Outlet />
          </div>
    </>
  );
}

export default PolicyLayout