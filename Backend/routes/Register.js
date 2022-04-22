
import Express from 'express'
import { PostController } from '../controller'
import { ApplicationController } from '../controller'
import { QuestionController } from '../controller'
const RegisterLoginRouter = new Express.Router()

const { register, logIn, lids } = ApplicationController
const { question, questionSet}= QuestionController
const { post_c ,interview} = PostController
RegisterLoginRouter.post('/Register', register)
RegisterLoginRouter.post('/LogIn', logIn)
RegisterLoginRouter.post('/Question', question)
RegisterLoginRouter.get('/QuestionSet/:id', questionSet)
RegisterLoginRouter.get('/interview', interview)
RegisterLoginRouter.get('/lids', lids)
RegisterLoginRouter.post('/Post', post_c)

export default RegisterLoginRouter;
