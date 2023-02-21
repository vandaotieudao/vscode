const mongoose = require("mongoose");
const schema = mongoose.Schema

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    desc: {
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    }

})
module.exports = mongoose.model('posts',PostSchema)
