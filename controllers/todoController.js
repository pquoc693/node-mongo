
const catchAsync = require('../middleware/async')
const TodoSchema = require('../models/todos')
const ApiError = require('../utils/apiError')

exports.createTodo = catchAsync(async (req, res) => {
  // try {
  const { title, description } = req.body
  // if (!content) {
  //   return res.json({ success: false, message: 'content is empty' })
  // }
  // const todo = new TodoSchema({
  //   content,
  //   isComplete: false
  // })

  // const data = await todo.save()

  const data = await TodoSchema.create({
    title,
    description,
  })
  res.status(201).json(data)
  // } catch (err) {
  //   const errors = err.errors
  //   const keys = Object.keys(errors)
  //   const errorObj = {}
  //   keys.map((key) => {
  //     errorObj[key] = errors[key].message
  //   })
  //   // res.status(400).json({
  //   //   success: false,
  //   //   errors: errorObj
  //   // })
  //   throw new ApiError(400, errorObj)
  // }
})

exports.getTodo = catchAsync(async (req, res) => {
  const todos = await TodoSchema.find()
  res.json({
    success: true,
    data: todos
  })
})

exports.updateTodo = catchAsync(async (req, res) => {
  // try {
  const { id } = req.params
  const { title, description } = req.body
  await TodoSchema.findByIdAndUpdate(id, {
    title, description
  })
  res.status(200).json({
    success: true,
  })
  // } catch (err) {
  //   console.log(err)
  //   res.status(400).json({
  //     success: false,
  //     message: 'Can\'t delete'
  //   })
  // }
})

exports.deleteTodo = catchAsync(async (req, res) => {
  // try {
  const { id } = req.params.id
  await TodoSchema.findByIdAndDelete(id)
  res.json({
    success: true,
  })
  // } catch (err) {
  //   console.log(err)
  //   res.status(400).json({
  //     success: false,
  //     message: 'Can\'t delete'
  //   })
  // }
})

exports.getTodoById = catchAsync(async (req, res) => {

  const { id } = req.params
  const todo = await TodoSchema.findById(id)
  if (!todo) {
    throw new ApiError(404, 'Not Found')
  }
  res.json({
    success: true,
    data: todo
  })
})