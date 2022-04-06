import React from "react";
import Nav from "../nav/nav";
import "./interview.css";
import { useState, useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

export default function Interview() {
  const [getData, getSetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      await fetch("http://localhost:8000/interview")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const { application } = data;
          getSetData(application);

          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className="head-interview">
        <div className="heading-i">Interview Experience</div>

        <div className="search">
          <input type="text" placeholder="Enter Company Name"></input>
          <GiMagnifyingGlass />
        </div>
      </div>

      {getData.map((todo) => (
        <div className="question-info">
          <h1>{todo.title}</h1>
          <p>{todo.content}</p>
        </div>
      ))}
    </>
  );
}
