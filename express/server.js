var express = require("express");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb+srv://root:root@cluster0.gyhxn3j.mongodb.net/cluster0?retryWrites=true&w=majority',{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("DB connect")
    }catch(error){
        console.log("error")
        process.exit(1)

    }
}

connectDB();

const app = express();
app.get('/', (res, rep) => res.setEncoding('Hello'))
app.listen(3000, () => {
    console.log("Created ");
});

