const {connectToMongo} = require('./connector/index');
const _express=require('express');

const app=_express();
require('dotenv').config();
const port=process.env.PORT;
const cors = require("cors");


app.use(cors());
app.use(_express.json());

connectToMongo();

app.use('/api', require("./routes/create/index"));



app.listen(port, ()=>{
  console.log("Server running at port ", port);
})