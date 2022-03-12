//This will contain the form required for sign up
import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import "./form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <span className="form-input-login">
          Already have an account ? Login <a href="#">here</a>
        </span>
        <hr />
        <br />
        <h1>Create your new account!</h1>
        <div className="form-inputs">
          <label className="form-label">Name:</label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">
            LinkedIn profile link:
          </label>
          <input
            id="linkedin"
            type="url"
            name="linkedin"
            className="form-input"
            placeholder="Enter your linkedin"
            value={values.linkedin}
            onChange={handleChange}
          />
          {errors.linkedin && <p>{errors.linkedin}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Github profile link:</label>
          <input
            id="github"
            type="url"
            name="github"
            className="form-input"
            placeholder="Enter your github"
            value={values.github}
            onChange={handleChange}
          />
          {errors.github && <p>{errors.github}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm your password:</label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
