import React from "react";
import "./home.css";
import Nav from "../nav/nav";
import a from "../../images/1.png";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="content">
          <p>Get All Resources to Crack your Dream Company!!</p>
        </div>
        <div className="img">
          <img src={a} alt="image" />
        </div>
      </div>
    </>
  );
}
