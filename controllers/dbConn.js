const mongoose = require("mongoose");

const dbConn = async ()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/taskManager');
    }catch(err){
        console.error(err);
    }
}

module.exports = dbConn;