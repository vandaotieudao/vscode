const mongoose = require("mongoose");
const schema = mongoose.Schema

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    content: {
        type: String,
        required: true
    },
    user:{
        type: schema.Types.ObjectId,
        ref: "users"
    },
    image: {
        type: String,
        required: false
    }, 
    video :{
        type:  String,
        required: false
    }

})
module.exports = mongoose.model('posts',PostSchema)
