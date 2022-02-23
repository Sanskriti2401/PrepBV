import React from "react";
import "./nav.css";
import b from "../../images/logo.jpeg";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <img src={b} alt="image" />

        <ul className="option">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Practice questions</a>
          </li>
          <li>
            <a href="#">Post</a>
          </li>
          <li>
            <a href="#">Interview Experience</a>
          </li>
          <li>
            <a href="#">Connect with Seniors</a>
          </li>
        </ul>
      </div>
    </>
  );
}
