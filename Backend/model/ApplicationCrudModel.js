import mongoose from "mongoose";
import ApplicationSchema from "../Schemas/Application";

const Application = mongoose.model("Application", ApplicationSchema);

const ApplicationCrudModel = {
  create,
  findByEmail,
  searchUsers,
};

async function create(attrs) {
  const application = await Application.create(attrs);
  console.log("Creation Completed");
  return application;
}

async function findByEmail(email) {
  const application = await Application.findOne({ email });
  console.log("Creation Completed");
  return application;
}

async function searchUsers(attrs) {
  console.log(attrs);
  const application = await Application.find(attrs);
  console.log("Creation Completed");
  return application;
}

export default ApplicationCrudModel;
