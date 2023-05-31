import React from 'react'

import '../../styling/Auth.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa';

function Login() {
  return (
    <>
      <form action="">
        <div className="form-control">
          <label htmlFor="userID">Email Address or Phone Number</label>
          <input
            type="text"
            name="userID"
            id="userID"
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
          Login
        </button>
      </form>

      <div className="login-alt">
        <p className="forget-password">Forgot Password?</p>
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

export default Login