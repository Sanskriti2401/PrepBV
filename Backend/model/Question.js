import { ApplicationCrudModel } from ".";

const QuestionSet = {
    question
};

async function question(attrs) {
    const {body}= attrs
    console.log(attrs.body.QuestionSheet[0])
    const application = await ApplicationCrudModel.createQuestionSet({...body});
  return {
    application,
    message: "Question Set created",
  };
}
export default QuestionSet;
