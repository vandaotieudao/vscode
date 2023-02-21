const mongoose = require("mongoose");
const schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique:  true
    },
    passwaor:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('users', UserSchema)