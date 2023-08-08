import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { SearchContext } from "../../App";
import { useGlobalContext } from "../../context";

function SignUp() {
  const {
    firstname,
    setFirstname,
    surname,
    setSurname,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setpassword,
    users,
    setUsers,
  } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      firstname: firstname,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    // console.log(newUser);

    setUsers([...users, newUser]);
    console.log(users);
    setFirstname("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");
    setpassword("");
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control-name">
          <div className="form-control">
            <label htmlFor="firstname">Firstname</label> <br />
            <input
              type="text"
              name="firstname"
              id="firstname"
              className=" input-name"
              placeholder="Enter email address of phone number"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
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
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="emailAddress">Email Address </label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            className="input"
            placeholder="Enter email address of phone number"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
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
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            required
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
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
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
