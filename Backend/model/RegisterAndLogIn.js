import { ApplicationCrudModel } from ".";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../config/configData";
import isEmptyObject from "../helper/isObjectEmpty";

const Credentials = {
  register,
  logIn,
};

async function register(attrs) {
  const { password, email, cpassword } = attrs;
  const application = await ApplicationCrudModel.findByEmail(email);
  if (!isEmptyObject(application)) {
    console.log("Duplicate UserName");
    return {
      application,
      message: "Account Creation Failed due to duplicate email",
    };
  }
  console.log(attrs);
  if (password === cpassword) {
    const hash = bcrypt.hashSync(password.toString(), 10);
    attrs.password = hash;
    await ApplicationCrudModel.create(attrs);
    const applicationAfterCreation = { message: "User Registered" };
    console.log(applicationAfterCreation);
    return applicationAfterCreation;
  }
  return {
    application,
    message: "Account Creation Failed due to password mismatch",
  };
}

async function logIn(attrs) {
  console.log(attrs);
  const { password: userEnteredPassword, email } = attrs;
  const application = await ApplicationCrudModel.findByEmail(email);
  if (application.length === 0) {
    console.log("Invalid User");
    return { application, message: "Invalid email" };
  }
  console.log("Application Log");
  console.log(application);
  const { password } = application;
  console.log(userEnteredPassword + "   " + password);
  const response = bcrypt.compareSync(userEnteredPassword, password);
  console.log(response);
  if (response) {
    return { application, message: "LogIn Successfull" };
  } else {
    return { message: "Wrong Password" };
  }
}

export default Credentials;
