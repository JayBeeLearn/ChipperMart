import React, { useContext, useState } from "react";

import "../../styling/Auth.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { SearchContext } from "../../App";
import { useGlobalContext } from "../../context";
import { Link, redirect } from "react-router-dom";

function Login() {
  const [number, setNumber] = useState("");
  const [pword, setPword] = useState("");

  const { users, setUser, user, logIn, setLogIn } = useGlobalContext();

  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();

    const loggedUser = users.filter(
      (user) => user.phoneNumber === number && user.password === pword
    );

    setLogIn(true);
    setUser(loggedUser);
    return redirect("/profile/account-info");
    // console.log(loggedUser);
  };

  return (
    <>
      <form action="" onSubmit={handleLogin}>
        <div className="form-control">
          {users.map((user) => {
            return (
              <li>
                {user.phoneNumber} & {user.password}{" "}
              </li>
            );
          })}
          <label htmlFor="userID">Email Address or Phone Number</label>
          <input
            type="text"
            name="userID"
            id="userID"
            className="input"
            placeholder="Enter email address of phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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
            value={pword}
            onChange={(e) => setPword(e.target.value)}
          />
        </div>

        <button
          // type="submit"
          // onClick={handleLogin}
          className="btn login-btn"
        >
          <Link to={`/profile/account-info`} className="w-full">
            login
          </Link>
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

export default Login;
