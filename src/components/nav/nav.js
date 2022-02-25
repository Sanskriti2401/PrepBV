import React from "react";
import "./nav.css";
import b from "../../images/logo.jpeg";
import Avatar from "@material-ui/core/Avatar";

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
            <a href="#">Practice questions</a>
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
          <li className="profile">
            <Avatar
              alt="profile"
              src="https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
            />
            <ul class="menu">
              <li className="menu-content">
                <a href="#">Edit Profile</a>
              </li>
              <li className="menu-content">
                <a href="#">Bookmarked</a>
              </li>
              <li className="menu-content">
                <a href="#">Log out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
