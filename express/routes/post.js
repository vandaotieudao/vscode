const express = require('express');
const routers =  express.Router();
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post');
const User = require('../models/User');

routers.post("/", verifyToken, async(req,res)=> {
    const {title, content, image,video } = req.body
    
    try{
const newPost = new Post({title, content,image, video, user: req.userId})
await newPost.save()
res.json({success : true, message: "OK", post: newPost})
    }catch(error){

    }
})

routers.get("/", verifyToken, async (req, res)=>{
    try{
        const posts = await Post.find().sort({ createdAt: 'desc' });
        res.json({success : true, posts})
    }catch(error){

    }
})

routers.get("/:id", verifyToken, async (req, res)=>{
    try{
        const postId  = req.params.id;
        const posts = await Post.findById(postId);
        res.json({success : true, posts})
    }catch(error){
        res.json({success : true, message:"false"})
    }
})

routers.put("/:id", verifyToken, async (req, res) => {
    
    const {title, content, image, video} = req.body

    if (!title)
    return res.json({success: false, message: "no title"})

    try{
        let updatePost = {
            title,
            content, 
            image,
            video
        }
        const postUpdateCondition = {_id : req.params.id, user : req.userId}
        
        updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, {new:  true})

        if(!updatePost)
        return res.status(401).json({success: false, message:"Error"});

        res.json({success : true,message:"new", updatePost})
    }catch(error){

    }

})
routers.delete("/", verifyToken, async (req, res)=> {
    const deletePosts = await Post.deleteMany({})
    res.json({success : true, message: "delete all"})

})
routers.delete("/:id", verifyToken, async ( req, res) => {
    try{
        const postConditionDelete = {_id : req.params.id, user: req.userId}
        const deletePost = await Post.findOneAndDelete(postConditionDelete)
        if(!deletePost)
        return res.status(401).json({success: false, message:"Error"})

        res.json({success : true,message:"Delete"})
    }catch(error){

    }
})
module.exports = routers