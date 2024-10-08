const express = require("express")
const mongoose = require("mongoose");
const dbConn = require('./controllers/dbConn')
const todoRouter = require('./routes/todoRoute')
const userRouter = require('./routes/userRoute')
const fs = require('fs')
const app = express()

app.use(express.json())
app.use(todoRouter)
app.use(userRouter)
dbConn();



mongoose.connection.once('open', ()=>{
    console.log("Connected to db")
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    })
})
