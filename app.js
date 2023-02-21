require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require('./routes/BlogRoutes')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//const Router = require("./routes")

const app = express();

app.get('/', (req, res) =>{
  res.status(200).json({msg: 'deus'})
})

app.use(express.json());
const username = "thalleslima3301";
const password = "thalles123";
const cluster = "cluster0";
const dbname = "myFirstDatabase";

app.get('/', (req, res) =>{
  res.status(200).json({msg: 'deus'})
})


mongoose.connect(

  `mongodb://thalleslima3301:thalles123@ac-cjxmmmh-shard-00-00.w3ak6gs.mongodb.net:27017,ac-cjxmmmh-shard-00-01.w3ak6gs.mongodb.net:27017,ac-cjxmmmh-shard-00-02.w3ak6gs.mongodb.net:27017/?ssl=true&replicaSet=atlas-zllgd9-shard-0&authSource=admin&retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("parabens!");
});


app.use("/api/blogs", blogRouter);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});