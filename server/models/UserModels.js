const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required:[true, "password can't be empty"]}

})

const User = mongoose.model("User", userSchema)
module.exports = User;

