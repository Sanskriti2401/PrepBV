export default function validateInfo(values) {
  let errors = {};
  //Checking Conditions for username
  if (!values.name.trim()) {
    errors.name = "Username required";
  }
  //Checking conditions for email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address in invalid";
  }

  if (!values.linkedInId) {
    errors.linkedInId = "URL required";
  }

  if (!values.githubId) {
    errors.githubId = "URL required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 characters or more!";
  }

  if (!values.cpassword) {
    errors.cpassword = "Password is required";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "Passwords do not match";
  }

  return errors;
}
