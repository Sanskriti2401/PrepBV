import React from "react";
import "./nav.css";
import b from "../../images/logo.jpeg";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <img src={b} alt="image" />

        <ul className="option">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/practice">Practice questions</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/interview">Interview Experience</Link>
          </li>
          <li>
            <Link to="/connect">Connect with Seniors</Link>
          </li>
          <li className="profile">
            <Avatar
              alt="profile"
              src="https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
            />
            <ul className="menu">
              <li className="menu-content">
                <Link to="edit">Edit Profile</Link>
              </li>
              <li className="menu-content">
                <Link to="bookmark">Bookmarked</Link>
              </li>
              <li className="menu-content">
                <Link to="#">Log out</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
