import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Connect from "./components/ConnectWithSenior/connect";
import Prac from "./components/practice/prac";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signup/SignupPage";
import Gs from "./components/home/company/gs";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/practice" element={<Prac />} />
          <Route exact path="/connect" element={<Connect />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/gs" element={<Gs />} />
          <Route exact path="/flip" element={<SignUpPage />} />
          <Route exact path="/barclays" element={<SignUpPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

/*
<Route path="/home">
{login ? <Profile/>: <Redirect to="/" />} 
</Route>


*/