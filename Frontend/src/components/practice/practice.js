import React from "react";
import ReactDOM from "react-dom";
import "./practice.css";
import { useNavigate } from "react-router-dom";
function Practice(props) {
  const navigate = useNavigate();
  return (
    <>

      <div>
        <div className="practice-card">
          <h3>{props.TopicName}</h3>
          <button
        className="solveButton"
        onClick={() => {
          console.log(`/${props.routes}`);
          navigate(`/${props.routes}`);
        }}
      >
      Solve Now
      </button>
          <p className="qcount">Total questions: {props.QCount}</p>
          <div className="container">
            <div className="skill html">{props.percentdone}% </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Practice;
