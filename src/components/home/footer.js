import React from "react";
import "./footer.css";
import logo from "../../images/logo.jpeg";

export default function Footer() {
  return (
    <div className="foot">
      <div className="foot1">
        <img src={logo} alt="Error" />
        <p>
          Address: Banasthali Vidyapith,
          <br></br>
          Rajasthan<br></br>
          Call Us: 923490234
        </p>
      </div>
      <div className="foot1">
        <p>
          Quick Links<br></br>
          <br></br>
        </p>
        <ul>
          <li className="span"> Home</li>
          <li className="span"> Practice</li>
          <li className="span">Interview Experience</li>
          <li className="span">Connect with Seniors</li>
        </ul>
      </div>

      <div className="foot1">
        <p>
          Social<br></br>
          <br></br>
        </p>
        <ul>
          <li className="span"> LinkedIn</li>
          <li className="span">Facebook</li>
          <li className="span"> Instagram</li>
          <li className="span">Connect with Seniors</li>
        </ul>
      </div>
    </div>
  );
}
