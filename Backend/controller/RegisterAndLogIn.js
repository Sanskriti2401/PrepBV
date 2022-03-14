'use strict'
import { Credentials } from '../model'

const ApplicationController = {
  register,
  logIn
}

async function register (req, res, next) {
  const { body } = req
  const data = await Credentials.register(body)
  console.log(data)
  return res.send(data)
}

async function logIn (req, res, next) {
  const { body } = req
  const data = await Credentials.logIn(body)
  const { message } = data
  return message
}

export default ApplicationController
