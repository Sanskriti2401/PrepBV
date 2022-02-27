import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Connect from "./components/ConnectWithSenior/connect";
import Practice from "./components/practice/practice";
import topicDetails from "./components/practice/topicDetails";
import Nav from "./components/nav/nav";
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
function App() {
  return (
    <div className="App">
      <Nav />
      {topicDetails.map(createCard)}
    </div>
  );
}
export default App;
