const User = require('../models/UserModels');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const JWT_SIGN = process.env.JWT_SIGN

//create a user
const register = async (req, res) =>{
    const { userName, name, email, password } = req.body;
    

    try {
        let user = await User.findOne({ email })
        
        if (user) return res.status(409).json({message: "A user with that email exists"})
        const hashed = await bcrypt.hash(password, 10)

        user = await User.create({userName, name, email, password: hashed})
        if (!user) return res.status(500).json({message: "An Error occurred while creating Account "})

        const token = jwt.sign({ userId: user._id, userName: user.userName }, process.env.JWT_SIGN, {expiresIn: "1h"})

        res.status(201).json({message: "User Created Sucessfully", token})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message: "internal server error"})
    }

}

//login

const login = async (req, res) =>{
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email: email })
        if (!user) return res.status(404).json({message: "Email doesnt exist, create account"})
        const isMatch = bcrypt.compare(password, user.password)
        if (isMatch){
            const token = jwt.sign({userId: user._id, userName: user.userName}, process.env.JWT_SIGN, {expiresIn: "1h"})
            res.status(200).json(token)
        }
    } catch (error) {
        console.error(error.message)
         res.status(500).json({message: "internal server error"})
    }
     
}

//get all users
const getAllUsers = async (req, res)=>{
    const users = await User.find().select("-password")
    try {
        if (!users.length) return res.status(404).json({message: "unable to get users"})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: "unable to getusers"})
    }

}
//get a particular user
const getMyuser = async (req, res) =>{
    const user = await User.findById( req.params.id )
    try {
        if (!user) return  res.status(404).json("unable to locate user")
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: "unable of locate the user"})
    }
}
//PUT //UPDATE 
const updateUser = async (req, res) =>{
    try {
         const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
         res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: "user doesn't exist"})
    }
}

//DELETE
const deleteUser = async (req, res) =>{
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({message: "user doesn't exist"})
    res.status(200).json({message: `${user} was successfully deleted`})
  } catch (error) {
    console.error
  }

}


module.exports = {
    register,
    login,
    getAllUsers,
    getMyuser,
    updateUser,
    deleteUser
};