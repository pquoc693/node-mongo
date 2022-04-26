const express = require('express')
const { PORT } = require('./config')
const connectDB = require('./config/db')
const catchError = require('./middleware/error')
const todoRoute = require('./routers/todoRouter')
const app = express()

connectDB()

//middleware  app.use
app.use(express.json()) //===>body trong request

app.use('/api/v1/todo', todoRoute)
app.use(catchError)


app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})