"use strict";
import { QuestionSet } from "../model";

const QuestionController = {
question
};

async function question(req, res, next) {
  const { body } = req;
  const data = await QuestionSet.question(body);
  console.log(data);
  return res.send(data);
}

export default QuestionController;
