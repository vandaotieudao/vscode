var express = require("express");
var app = express();
const mongoose = require("mongoose");

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

app.get('/', (res, rep) => res.setEncoding('Hello'))
app.listen(3000, () => {
    console.log("Created ");
});

