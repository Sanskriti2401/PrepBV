import React, { useEffect } from "react";
import "./login_basic.css";
import { useState } from "react";
import FormSuccess from "../signup/FormSuccess";
import { useNavigate } from "react-router-dom";

export default function LoginBasic() {
  const [inputs, setInputs] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    setIsClicked(true);
    fetch("http://localhost:8000/LogIn", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    }).then(function (response) {
      console.log(response.body);

      const { body } = response;

      const { message } = body;
      console.log(body);
      // if (response.statusText == "OK") {
      //   setIsSubmitted(true);
      // }
      

      return response.json();
    }).then(function (data) {
      console.log(data.message);
      console.log('entered');
      { data.message === "Wrong Password" ? setIsSubmitted(false) : setIsSubmitted(true)}
      
    });

    event.preventDefault();
    console.log(inputs);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      let cancel=false;
      console.log(" after message: " + isSubmitted);
      console.log("status: " + isSubmitted + " " + isClicked);
      {
        isClicked ? (isSubmitted ? navigate("/home") : alert('Invalid Credentials!')) : navigate("/")
        // isSubmitted ? navigate("/home") : alert('Invalid Credentials!')
      }
      return() => {
        cancel=true;
      }
    }, 1000);
    
  },[isSubmitted])

  return (
    <>
      <div className="l_b">
        <form onSubmit={handleSubmit}>
          <div className="l_b-email">
            <label>
              Email Address
              <input
                type="text"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="l_b-password">
            <label>
              Password
              <input
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="l_b-submit">
            <input type="submit" value={"Login"}></input>
          </div>
        </form>
      </div>
    </>
  );
}
