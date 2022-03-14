
import Express from 'express'

import { ApplicationController } from '../controller'
const RegisterLoginRouter = new Express.Router()

const { register, logIn } = ApplicationController

RegisterLoginRouter.post('/Register', register)
RegisterLoginRouter.post('/LogIn', logIn)
RegisterLoginRouter.post('/search', register)

export default RegisterLoginRouter
