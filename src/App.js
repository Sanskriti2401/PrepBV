import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./components/editProfile/ProfileScreen"
import SignupPage from "./components/signup/SignupPage";

function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
