import React from "react";
import ReactDOM from 'react-dom';
import "./practice.css"
function Practice(props)
{
return <>
  
<div>
    <div className="card">
      <h1>{props.TopicName}</h1>
      <button className="solveButton">Solve Now</button>
      <p className="qcount">Total questions: {props.QCount}</p>
      <div className="container">
        <div className="skill html">{props.percentdone}% </div>
      </div>
    </div>
</div>
</>
}
export default Practice;
