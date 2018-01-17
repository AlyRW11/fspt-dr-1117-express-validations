import Express from 'express'
import Parser from 'body-parser'
// import Joi from 'joi'
import { joiValidate, Joi } from 'express-joi'



const app = Express()

app.use(Parser.json())

const loginSchema = {
  email: Joi.types.String().email().required(),
  password: Joi.types.String().min(6).max(128).required()
}

app.post('/login', joiValidate(loginSchema), (req, res) => {
  const { body } = req

  console.log(body)
  return res.json(body)
})

app.get('/', (req, res) => {
  return res.send('Hello')
})

app.listen(3000)

