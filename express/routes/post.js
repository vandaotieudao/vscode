const express = require("express");
const routers =  express.Router();

const Post = require('../models/Post');

routers.post("/", async(req,res)=> {
    const {title, content,user, image,video } = req.body
    
    try{
const newPost = new Post({title, content, user, image, video})
await newPost.save()
res.json({success : true, message: "OK", post: newPost})
    }catch(error){

    }
})
module.exports = routers