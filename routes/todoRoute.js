const express = require("express")
const handelTodo = require('../controllers/handelTodo')
const router = express.Router();

router.get('/todo',handelTodo.getAllTodos)
.get('/todo/:title', handelTodo.getTodo)
.post('/todo', handelTodo.addTodo)
.delete('/todo/:title', handelTodo.deleteTodo)
.put('/todo/:title', handelTodo.updateTodo);



module.exports = router;