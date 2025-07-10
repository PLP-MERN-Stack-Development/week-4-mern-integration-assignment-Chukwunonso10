const jwt = require('jsonwebtoken')
const User = require('../models/UserModels')

const authenticate = async (req, res, next) =>{
    const Auth = req.headers.authorization
    try {
        if (!Auth || !Auth.startsWith('Bearer ')) return  res.status(400).json({message: "No Token Provided"})
        const token = Auth.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SIGN) //userId and username
        const user = await User.findOne({ _id: decoded.userId})
        req.user = user   //pass to req.user for futher use
        next()
        
    } catch (error) {
        res.status(401).json({message: "unauthorized access", error: error.message})
    }
        
}

module.exports = authenticate;