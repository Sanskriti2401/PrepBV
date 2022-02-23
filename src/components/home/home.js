import React from "react";
import "./home.css";
import Nav from "../nav/nav";
import a from "../../images/2.png";
import Card from "./card";
import company from "./company";
import Footer from "./footer";

function createcard(company) {
  return <Card key={company.id} img={company.url} />;
}

export default function Home() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="content">
          <div className="text1">
            <p>Get All Resources to Crack your Dream Company!!</p>
          </div>

          <div className="text2">
            <p>Let's Crack It Together!!</p>
          </div>

          <button className="button">Get Started</button>
        </div>

        <img className="img" src={a} alt="image" />
      </div>
      <h1 className="h">Select Company</h1>
      <div className="cards">{company.map(createcard)}</div>
      <Footer />
    </>
  );
}
