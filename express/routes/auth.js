
const express = require('express')
const routes = express.Router()

const User = require('../models/User')
const jwt = require('jsonwebtoken')

routes.post('/register', async(req, res)=> {
    const {username, password} = req.body

    if(!username || !password)
    return res.status(400).json({success: false, message:"Missing "})
    try {
        const user = await User.findOne({username})
        if (user)
        return res.status(400).json({success: false, message:"Missing "})

        const newUser = new User(username, password)
        await newUser.save();

        const accesstoken = jwt.sign({userId: newUser},"dghdghdfhd")

        res.json({success: true, message:'user created', accesstoken})
    } catch (error) {
        
    }
})
module.exports = routes