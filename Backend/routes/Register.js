
import Express from 'express'

import { ApplicationController } from '../controller'
import { QuestionController } from '../controller'
const RegisterLoginRouter = new Express.Router()

const { register, logIn } = ApplicationController
const { question}= QuestionController


RegisterLoginRouter.post('/Register', register)
RegisterLoginRouter.post('/LogIn', logIn)
RegisterLoginRouter.post('/Question', question)

export default RegisterLoginRouter
