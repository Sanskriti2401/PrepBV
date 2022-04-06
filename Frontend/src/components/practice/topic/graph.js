import React from "react";
import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import "./questions.css";
import Nav from "../../nav/nav";
  export default function Graph()
   {
   const [getData, getSetData] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        try{
          await fetch("http://localhost:8000/QuestionSet/Graph").then(res => res.json())
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
        <div className="topic-heading">
        <h1 >Graph</h1>
        </div>
        {getData.map((todo) => (
          <div className="question-info">
         <Checkbox />
            <a href={todo.URL}>{todo.Problem}</a>
          </div>
        ))}
        </div>
    )
    
  }