const todo = require('../models/todoModel');

const getAllTodos = async (req,res) =>{
     let todos= await todo.find();
     if(!todos){
        return res.json({'message': 'No todos are found'})
     }
     const coundDocument = await todo.countDocuments();
     res.json({'message':`Total number of documents: ${coundDocument}`, data:todos});
 }
const getTodo = async (req,res)=>{
    let oneTodo = await todo.findById(req.params.id).exec();
    if(!oneTodo) return res.json({'message': 'No todos are found'});
    res.send(oneTodo);
}
 
const addTodo = async (req,res) =>{
    let new_todo = req.body;
    try{
        await todo.create(new_todo);
        res.json({ message: "Added ", data: new_todo });
    }catch(err){
        res.json({ message: err.message });
    }
}

const deleteTodo = async (req,res)=>{
   const foundTodo = await todo.findOne({title:req.params.title}).exec()
   if(!foundTodo){
    res.json({'message': `No Todo was found by this title${req.params.title}`})
   }
   const results = await foundTodo.deleteOne({title:req.params.title});
   res.json({message: "deleted ", data: results})
}

const updateTodo = async (req,res)=>{
   const foundTodo = await todo.findOne({title:req.params.title}).exec()
   if(!foundTodo){
    res.json({'message': `No Todo was found by this title${req.params.title}`})
   }
   if(req.body?.title) foundTodo.title = req.body.title;
   if(req.body?.status) foundTodo.status = req.body.status;
   const results = await foundTodo.save();
   res.json({message: "Updated ", data: results})
}
const findAndDelete = async(req,res)=>{
    const foundTodo = await todo.findByIdAndDelete(req.params.id,).exec()
    if(!foundTodo){
        res.json({'message': `No Todo was found by this ID${req.params.id}`})
       }
    res.json({message: "Deleted ", data: foundTodo})

}

module.exports = {
    getAllTodos,
    getTodo,
    addTodo,
    deleteTodo,
    updateTodo,
    findAndDelete
}