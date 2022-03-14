import React from "react";
import "./login_basic.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../home/home";
import FormSuccess from "../signup/FormSuccess";

export default function LoginBasic() {
  const [inputs, setInputs] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
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
      if (message === "LogIn Successfull") {
        setIsSubmitted(true);
      }

      {
        isSubmitted ? <Home /> : <FormSuccess />
      }

      return response.json();
    });

    event.preventDefault();
    console.log(inputs);
  };

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
