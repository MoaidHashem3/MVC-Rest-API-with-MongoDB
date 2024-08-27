const express = require("express")
const handelTodo = require('../controllers/handelTodo')
const router = express.Router();

router.get('/todo',handelTodo.getAllTodos)
.get('/todo/:id', handelTodo.getTodo)
.post('/todo', handelTodo.addTodo)
.delete('/todo/:id', handelTodo.findAndDelete)
.put('/todo/:title', handelTodo.updateTodo);



module.exports = router;