import React from "react";
import "./login.css";
import img1 from "../../images/2.png";
import logo from "../../images/logo.jpeg";
import LoginBasic from "../login_basic/login_basic";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="left-part">
          <div className="bg"></div>
          <div className="img">
            <img src={img1} alt="Error" />
          </div>
          <div className="logo">
            <img src={logo} alt="PrepBV" />
          </div>
        </div>
        <div className="right-part">
          <div className="text">
            <h3>Login</h3>
            <p className="user">New User?</p>
            <p className="signup">Sign Up</p>
            <hr className="hr"></hr>
            <LoginBasic />
          </div>
        </div>
      </div>
    </>
  );
}
