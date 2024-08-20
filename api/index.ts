const {connectToMongo} = require('./connector/index');
const express=require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT;
const cors = require("cors");


app.use(cors());
app.use(express.json());

connectToMongo();

app.listen(port, ()=>{
  console.log("Server running at port ", port);
})