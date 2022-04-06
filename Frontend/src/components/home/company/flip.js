import React from "react";
import Nav from "../../nav/nav";
import flip from "../../../images/flip.jpeg";
import "./company.css";
import Checkbox from "../../practice/topic/Checkbox";
import { useState, useEffect } from "react";

function Flip() {
  const [getData, getSetData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
      try{
        await fetch("http://localhost:8000/QuestionSet/Flipkart").then(res => res.json())
        .then((data) => {
          const {requiredData}=data
          getSetData(requiredData)
          console.log(requiredData)
          setLoading(false)
        })
      } catch(err){
      console.log(err)
      }
  }
  
  useEffect(() => {
  fetchData()
  }, [])
  return (
    <div>
      <Nav />
      <div className="header">
        <img className="header-img" src={flip} alt="Error" />
        <div className="company-name">
          <h1>Flipkart</h1>
        </div>
      </div>
      <div className="info">
        <div className="info-heading">
          <h1> Internship and Full Time</h1>
        </div>
        <div className="info-text">
          Flipkart is an Indian e-commerce company, headquartered in Bangalore,
          Karnataka, India, and incorporated in Singapore as a private limited
          company.<br></br>
          Flipkart visits the campus in last week of August or in early
          September for both 2 months internship and FTE.<br></br><br></br>
          <span className="text-span"> ELIGIBILE COURSES :</span> CSE and IT Students
          <br></br>
          <span className="text-span">ELIGIBILITY CRITERIA : </span> 7 CGPA &
          Above in the current course only ( aggregate of all semesters till the
          last semester read ). <br></br>
          <span className="text-span"> NUMBER OF ROUNDS :</span> 3 ( 1 Coding
          Round and 2 Technical Rounds )<br></br><br></br>
          Coding Round is of 90 minutes and there are 3 questions to solve.
          Technical rounds are generally of 50-60 minutes.
        </div>
      </div>
      <div className="question-heading">
        <h1>Questions</h1>
        {getData.map((todo) => (
        <div className="question-list">
          <Checkbox />
          <a href={todo.URL}>{todo.Problem}</a>
        </div>
      ))}

      </div>
    </div>
  );
}

export default Flip;
