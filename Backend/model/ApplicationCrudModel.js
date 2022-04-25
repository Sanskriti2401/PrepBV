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
  append,
  lids
  
};

async function lids() {
  const application = await Application.find({});
  console.log(application)
  console.log("fetched");
  return application;
}

async function create(attrs) {
  attrs.bookmark=[];
  const application = await Application.create(attrs);
  console.log("Creation Completed");
  return application;
}

async function append(id,email) {
  const application = await Application.findOne({ email });
  // const res = await Application.updateOne({ email: email }, { bookmark: id });
  // const application = await Application.create(attrs);
  if(!application.bookmark.includes(id))
  {
    application.bookmark.push(id);
    await application.save();
    console.log("Added Successfully!");
    return application;
  }
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
