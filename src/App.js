import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Connect from "./components/ConnectWithSenior/connect";
import Prac from "./components/practice/prac";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/practice" element={<Prac />} />
          <Route exact path="/connect" element={<Connect />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
