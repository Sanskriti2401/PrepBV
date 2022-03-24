
import Express from 'express'

import { ApplicationController } from '../controller'
import { PostController } from '../controller'

const RegisterLoginRouter = new Express.Router()

const { register, logIn } = ApplicationController
const { post_c } = PostController

RegisterLoginRouter.post('/Register', register)
RegisterLoginRouter.post('/LogIn', logIn)
RegisterLoginRouter.post('/Post', post_c)

export default RegisterLoginRouter
