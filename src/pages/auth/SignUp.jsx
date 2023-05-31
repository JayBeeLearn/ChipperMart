import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function SignUp() {
  return (
    <>
      <form action="">
        <div className="form-control-name">
          <div className="form-control">
            <label htmlFor="firstname">Firstname</label> <br />
            <input
              type="text"
              name="firstname"
              id="firstname"
              className=" input-name"
              placeholder="Enter email address of phone number"
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Lastname</label> <br />
            <input
              type="text"
              name="lastname"
              id="lastname"
              className=" input-name"
              placeholder="Enter email address of phone number"
            />
          </div>
        </div>
       
        <div className="form-control">
          <label htmlFor="emailAddress">Email Address </label>
          <input
            type="text"
            name="emailAddress"
            id="emailAddress"
            className="input"
            placeholder="Enter email address of phone number"
          />
        </div>

        <div className="form-control">
          <label htmlFor="phoneNumber"> Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="input"
            placeholder="Enter email address of phone number"
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn login-btn">
          Sign Up
        </button>
      </form>

      <div className="login-alt">
       
        <p>or</p>
        <hr />

        <div className="social-login">
          <button className="social-login-btn">
            {" "}
            <FaGoogle /> Login with Google
          </button>
          <button className="social-login-btn">
            {" "}
            <FaFacebook /> Login with Facebook
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
