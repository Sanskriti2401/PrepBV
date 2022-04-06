import React from "react";
import Nav from "../nav/nav";
import "./interview.css";
import { useState, useEffect } from "react";
<>
  <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    rel="stylesheet"
  />
</>;

export default function Interview() {
  const [getData, getSetData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
      try{
        await fetch("http://localhost:8000/interview").then(res => res.json())
        .then((data) => {
          const {body}=data
          getSetData(body)
      
          console.log(body)
          console.log("hello");
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
    <>
      <Nav />
      <div className="head-interview">
        <div className="heading-i">Interview Experience</div>
        
        <div className="search">
          <input type="text" placeholder="Enter Company Name"></input>
          <i className="fa fa-search"></i>
        </div>
      </div>
    
      {getData.map((todo) => (
        <div className="question-info">
          <h1>{todo.title}</h1>
          <p>{todo.content}</p>
          console.log(todo.title);
        </div>
      ))}

      
    </>
  );
}
