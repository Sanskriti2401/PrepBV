import "./App.css";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import Connect from "./components/ConnectWithSenior/connect";
import Prac from "./components/practice/prac";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signup/SignupPage";
import Gs from "./components/home/company/gs";
import Flip from "./components/home/company/flip";
import Amex from "./components/home/company/amex";
import Cisco from "./components/home/company/cisco";
import Oracle from "./components/home/company/oracle";
import Barclays from "./components/home/company/barclays";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/practice" element={<Prac />} />
          <Route exact path="/connect" element={<Connect />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/gs" element={<Gs />} />
          <Route exact path="/flip" element={<Flip />} />
          <Route exact path="/amex" element={<Amex />} />
          <Route exact path="/cisco" element={<Cisco />} />
          <Route exact path="/oracle" element={<Oracle />} />
          <Route exact path="/barclays" element={<Barclays />} />
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
