export default function validateInfo(values) {
  let errors = {};
  //Checking Conditions for username
  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  //Checking conditions for email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address in invalid";
  }

  if (!values.linkedin)
  {
    errors.linkedin= "URL required";
  }

  if (!values.github)
  {
    errors.github= "URL required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 characters or more!";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
