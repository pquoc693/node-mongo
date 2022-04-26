const express = require('express')
const { createTodo, getTodo, updateTodo, deleteTodo, getTodoById } = require('../controllers/todoController')

const router = express.Router()

router.get('/', getTodo)

router.get('/:id', getTodoById)

router.post('/', createTodo)

router.delete('/:id', deleteTodo)

router.patch('/:id', updateTodo)

module.exports = router