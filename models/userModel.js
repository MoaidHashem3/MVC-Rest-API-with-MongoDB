const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, 'Invalid email address']
    },
    password:{
        type:String,
        required:true,
    }
})


userSchema.pre("save", async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});


const userModel = mongoose.model("user", userSchema)

module.exports = userModel;