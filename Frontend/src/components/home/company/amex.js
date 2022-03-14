import React from "react";
import Nav from "../../nav/nav";
import amex from "../../../images/amex.png";
import "./company.css";

function Amex() {
  return (
    <div>
      <Nav />
      <div className="header">
        <img className="header-img" src={amex} alt="Error" />
        <div className="company-name">
          <h1>American Express</h1>
        </div>
      </div>
      <div className="info">
        <div className="info-heading">
          <h1> Internship and Full Time</h1>
        </div>
        <div className="info-text">
          American Express is a global travel, financial and network services
          provider. Founded in 1850, it has since grown to be a Fortune 500
          company. The company provides individuals with charge and credit
          cards, travellers' cheques and other stored - value products.{" "}
          <br></br>
          <br></br>
          <span className="text-span"> ELIGIBLE COURSES : </span> B.Tech (CS / IT
          / EC / EE / EI) V sem for 2 Months Summer Internship & VII sem for FTE.<br></br>
          <span className="text-span">ELIGIBILITY CRITERIA : </span> 7 CGPA &
          Above in the current course only ( aggregate of all semesters till the
          last semester read ). <br></br>
          <span className="text-span">  JOB LOCATION : </span> Bangalore / Gurgaon<br></br>
          <span className="text-span"> INTERNSHIP DURATION :</span> 2 months ( 8
          weeks ) : May-June <br></br><br></br>
          Coding Round consists of three questions ( All coding questions ). OA
          basically is an Online Assessment which was conducted on codility
          platform and within 1 hr 30 mins we were supposed to solve 3 questions
          and the score was even displayed just after the test. After this
          OA, students are shortlisted. Followed by interviews, there are 2
          rounds, one technical and one HR for the interview. Finally selected
          students are informed!
        </div>
      </div>
      <div className="question-heading">
        <h1>Questions</h1>

      </div>
    </div>
  );
}

export default Amex;
