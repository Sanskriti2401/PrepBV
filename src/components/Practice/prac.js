import React from "react";
import Nav from "../nav/nav";
import topicDetails from "./topicDetails";
import Practice from "./practice";

function createCard(topicDetails) {
  return (
    <>
      <Practice
        key={topicDetails.id}
        TopicName={topicDetails.topicName}
        QCount={topicDetails.qCount}
        percentdone={topicDetails.percentdone}
      />
    </>
  );
}

export default function Prac() {
  return (
    <div>
      <Nav />
      {topicDetails.map(createCard)}
    </div>
  );
}
