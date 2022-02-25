import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Error" />
      <p>Explore </p>
    </div>
  );
}
