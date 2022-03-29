
import Express from 'express'

import { ApplicationController } from '../controller'
import { QuestionController } from '../controller'
const RegisterLoginRouter = new Express.Router()

const { register, logIn } = ApplicationController
const { question, questionSet}= QuestionController


RegisterLoginRouter.post('/Register', register)
RegisterLoginRouter.post('/LogIn', logIn)
RegisterLoginRouter.post('/Question', question)
RegisterLoginRouter.get('/QuestionSet/:id', questionSet)

export default RegisterLoginRouter
