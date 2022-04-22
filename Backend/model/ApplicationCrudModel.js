import mongoose from "mongoose";
import ApplicationSchema from "../Schemas/Application";
import { QuestionSetSchema } from "../Schemas/QuestionSet";

const Application = mongoose.model("Application", ApplicationSchema);
const Question = mongoose.model("Question", QuestionSetSchema);

const ApplicationCrudModel = {
  create,
  findByEmail,
  searchUsers,
  createQuestionSet,
  questionSet,
  
  
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

async function createQuestionSet(attrs) {
  const application = await Question.create(attrs);
  console.log("Creation Completed");
  return application;
}

async function questionSet() {
  const application = await Question.find({});
  console.log(application)
  console.log("Questions fetched");
  return application;
}



export default ApplicationCrudModel;
