import React, { useState } from "react";
import { useContext } from "react";
// import { SearchContext } from "../../App";

import { useGlobalContext } from "../../context";
function AccountInfo() {

  const { user } = useGlobalContext()
  
  const [fName, setFName] = useState(user[0].firstname)

  console.log(user);

  const { firstname, surname, email, password, phoneNumber } = user[0];
  console.log(user[0].firstname);

  return (
    < >
      <h2 className="pro_sec_title ">Account Information</h2>
      <hr />
      <section className="pro_sec account-section">
        <div className="account-info">
          <form action="">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" value={fName} onChange={(e) => {
                setFName(e.target.value)
              }}/>
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" value={surname} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" value={email} />
            </div>

            <div className="form-group">
              <label htmlFor="phonenumber">Phone Number</label>
              <input type="text" value={phoneNumber} />
            </div>

            <div className="change-password">
              <h2 className="text-left">Change Password</h2>
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="currentpassword">Current Password</label>
              <input
                type="password"
                placeholder="Enter your current password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="newpassword">New Password</label>
              <input type="password" placeholder="Enter your new password" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your confirm password"
              />
            </div>

            <button className="account-btn" >Save Changes</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default AccountInfo;
