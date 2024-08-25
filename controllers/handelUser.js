const user = require('../models/userModel');

const getAllUsers = async (req,res) =>{
    let users= await user.find();
    if(!user){
       return res.json({'message': 'No Users are found'})
    }
    res.send(users);
}
const createUser= async (req,res)=>{
    let new_user = req.body;
    try{
        await user.create(new_user);
        res.json({ message: "Added ", data: new_user });
    }catch(err){
        res.json({ message: err.message });
    }
}


module.exports = {
    createUser,
    getAllUsers
}