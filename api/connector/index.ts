const mongoose = require("mongoose");
require('dotenv').config();
const url=process.env.MONGO_URL;

export function connectToMongo() :void {
    mongoose.set("strictQuery", true);
    mongoose.connect(url);
    // mongoose.connect('mongodb://127.0.0.1:27017/CG',
    //     {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true,
    //         useFindAndModify: false
    //     }
    // );

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected to database");
    });
}
