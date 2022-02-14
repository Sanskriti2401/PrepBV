import React from "react";
import "./nav.css";
import b from "../../images/3.jpeg";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="img">
          <img src={b} alt="image" />
        </div>
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
