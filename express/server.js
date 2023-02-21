var express = require("express");
var app = express();
app.use(express.json())
const mongoose = require("mongoose");
const authRouter = require('./routes/auth')

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb+srv://root:root@cluster0.gyhxn3j.mongodb.net/?retryWrites=true&w=majority')
        console.log("DB connect")
    }catch(error){
        console.log("error")
        process.exit(1)

    }
}

connectDB();


app.use('/api/auth', authRouter)
app.listen(3000, () => {
    console.log("Created ");
});

