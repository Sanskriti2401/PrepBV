import React from "react";
import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
// import Bookmark from "./Bookmark";
import "./questions.css";
import Nav from "../../nav/nav";
import { BsBookHalf } from "react-icons/bs";

const addit=(props)=> {
  const email=window.localStorage.getItem('user')
  console.log(email);
  console.log(props._id)
  fetch("http://localhost:8000/Register", {
    crossDomain: true,
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify({
      id: props._id,
      email: email
    }),
  }).then(function (response) {
    console.log(response.body);

    const { body } = response;

    const { message } = body;

    return response.json();
  });
  alert(`Added to you bookmark list!`)
}

export default function Array() {
  const [getData, getSetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marked, setMarked] = React.useState(false);


  const fetchData = async () => {
    try {
      await fetch("http://localhost:8000/QuestionSet/Array")
        .then((res) => res.json())
        .then((data) => {
          const { requiredData } = data;
          getSetData(requiredData);
          console.log(requiredData);
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
    <div>
      <Nav />
      <div className="topic-heading">
        <h1>Array</h1>
      </div>
      {getData.map((todo,_id) => (
        <div className="question-info">
          <Checkbox />
          <a href={todo.URL}>{todo.Problem}</a>
          <div className="book">
            <span onClick={() => addit(todo)}>
              <BsBookHalf />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}