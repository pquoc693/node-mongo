const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
  // content: String,
  title: {
    type: String,
    required: [true, 'title is required'],
    maxlength: [30, 'Must be less than 30 characters'],
    minlength: [6, 'Must be at least 6 characters'],
    //max:
    //min: 
  },
  description: String,
  isComplete: {
    type: Boolean,
    default: false
  }
})

const TodoSchema = mongoose.model('todo', todoSchema)

module.exports = TodoSchema