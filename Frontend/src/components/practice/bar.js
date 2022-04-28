import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Practicee = styled.div`
  background-color: #aef799;
  height: 180px;
  width: 30%;
  margin: 20px;
  float: left;
  padding: 2%;
  box-sizing: border-box;
  border: 2px solid #a5afa2;
  border-radius: 20px 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(34, 33, 33);
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }
`;

const Qcount = styled.p`
  padding-top: 5%;
`;
const Solve = styled.button`
  float: right;
  background-color: green;
  border-radius: 5px 5px;
  margin-right: 10px;
  color: azure;
  height: 22%;
  width: 38%;
  margin-top: -40px;
  font-family: cursive;
  font-size: large;
`;
const Container = styled.div`
  background-color: rgb(192, 192, 192);
  width: 90%;
  border-radius: 20px 20px;
  margin-top: 4%;
  padding: 0;
`;

const Skill = styled.div`
  background-color: rgb(11, 156, 77);
  color: white;
  padding: 0;
  text-align: right;
  border-radius: 20px 20px;

  font-size: 12px;
  width: ${(props) => props.c}%;
`;
// width: ${props.c}%;

export default function Bar(props) {
  const navigate = useNavigate();
  return (
    <Practicee>
      <h3>{props.topic}</h3>
      <Solve
        onClick={() => {
          console.log(`/${props.route}`);
          navigate(`/${props.route}`);
        }}
      >
        Solve Now
      </Solve>
      <Qcount>Total questions: {props.qcount}</Qcount>
      <Container>
        <Skill c={props.c}>{props.c}% </Skill>
      </Container>
    </Practicee>
  );
}
