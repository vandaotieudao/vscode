
const express = require('express')
const routes = express.Router()

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const routers = require('./post')
const verifyToken = require('../middleware/auth')

routes.post('/register', async(req, res)=> {
    const { username, password} = req.body

    if(!username || !password)
    return res.status(400).json({success: false, message:"Missing data "})
    try {
        const user = await User.findOne({username})
        if (user)
        return res.status(400).json({success: false, message:"existing "})

        const newUser = new User({username, password})
        await newUser.save();

        const accesstoken = jwt.sign({userId: newUser._id},"dghdghdfhd")

         res.json({success: true, message:'user created', accesstoken})
    } catch (error) {
        
    }
})
routes.post('/login', async(req, res)=> {
    const { username, password} = req.body

    if(!username || !password)
    return res.status(400).json({success: false, message:"Wrong use or pass "})
    try {
        const user = await User.findOne({username})
        if (!user){
            return res.status(400).json({success: false, message:"Wrong user "})
        }
        if (password != user.password)
        return res.status(400).json({success: false, message:" Wrong password"})

        const accesstoken = jwt.sign({userId: user._id},"dghdghdfhd")

         res.json({success: true, message:'user login', accesstoken})
    } catch (error) {
        
    }
})


module.exports = routes