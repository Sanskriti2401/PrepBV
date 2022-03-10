import React from "react";
import Nav from "../../nav/nav";
import cisco from "../../../images/cisco.jpg";
import "./company.css";

function Cisco() {
  return (
    <div>
      <Nav />
      <div className="header">
        <img className="header-img" src={cisco} alt="Error" />
        <div className="company-name">
          <h1>Cisco</h1>
        </div>
      </div>
      <div className="info">
        <div className="info-heading">
          <h1> Internship and Full Time</h1>
        </div>
        <div className="info-text">
          Cisco is an American multinational technology conglomerate corporation
          headquartered in San Jose, California. Cisco has 7 Offices in Gurgaon,
          Mumbai, Bangalore, Chennai, Pune, Kolkata and Hyderabad Cisco visits
          the campus in early March for 2 month internship and in October for
          FTE.<br></br><br></br>
          <span className="text-span"> ELIGIBILE COURSES :</span> CSE, IT, ECE,
          EE, EI Students.<br></br>
          <span className="text-span">ELIGIBILITY CRITERIA : </span> 7 CGPA &
          Above in the current course only ( aggregate of all semesters till the
          last semester read ) <br></br>
          <span className="text-span"> NUMBER OF ROUNDS :</span> 4 ( 1 Coding
          Round, 2 Technical Rounds and 1 HR Round )<br></br><br></br>
          <span className="text-span">
            {" "}
            Round 1 ( Online Test - 1hr ) :{" "}
          </span>{" "}
          Consisted of around 25 MCQ ranging from topics like Networking, SQL,
          Python, Java, C/C++, and Aptitude. <br></br>The majority of the questions were
          from Networking and Aptitude. One coding was there which was of medium
          level <br></br>
          <span className="text-span">
            {" "}
            Round 2 ( Technical Round : 30 to 40 mins ) :{" "}
          </span>{" "}
          General introduction followed up by many technical questions and
          scenario-based questions.<br></br>
          <span className="text-span">
            {" "}
            Round 3 ( Managerial Round : 30 to 40 mins ) :
          </span>{" "}
          In this, they access you on the basis of your managerial skills.
          Resume based questions and discussion on projects.<br></br>
          <span className="text-span">
            {" "}
            Round 4 ( HR Round : 15 mins ) :{" "}
          </span>{" "}
          HR based questions like " why do you want to join CISCO?  " etc. <br></br>
        </div>
      </div>
      <div className="question-heading">
        <h1>Questions</h1>

      </div>
    </div>
  );
}

export default Cisco;
