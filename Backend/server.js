import express from 'express'
import mongoose from 'mongoose'
import {RegisterLoginRouter} from './routes'
import {DB_CONNECTION} from './config/configData'

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('DB connected')
})

const app = express()
app.use(express.json())

const port = 8000

app.use('/', RegisterLoginRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})