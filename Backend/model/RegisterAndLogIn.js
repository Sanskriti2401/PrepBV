import { ApplicationCrudModel } from '.'
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../config/configData'

const Credentials = {
  register,
  logIn
}

async function register (attrs) {
  const { password, email } = attrs
  const application = await ApplicationCrudModel.findByEmail(email)
  if (!application.length === 0) {
    console.log('Duplicate UserName')
    return { ...application, message: 'Account Creation Failed due to duplicate email' }
  }
  
  const hash = bcrypt.hashSync(password.toString(), 10)
  attrs.password = hash
  await ApplicationCrudModel.create(attrs)
  const applicationAfterCreation = {  message: 'User Registered' }
  console.log(applicationAfterCreation)
  return applicationAfterCreation
}

async function logIn (attrs) {
  console.log(attrs)
  const { password: userEnteredPassword, email } = attrs
  const application = await ApplicationCrudModel.findByEmail(email)
  if (application.length === 0) {
    console.log('Invalid User')
    return { ...application, message: 'Invalid email' }
  }
  console.log(application)
  const { password } = application[0]
  console.log(userEnteredPassword + '   ' + password)
  const response = bcrypt.compareSync(userEnteredPassword, password)
  if (response) {
    return { ...application[0], message: 'LogIn Successfull' }
  } else {
    return { message: 'Wrong Password' }
  }
}

export default Credentials
