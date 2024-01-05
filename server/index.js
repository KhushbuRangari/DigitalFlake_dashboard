const express = require("express");
const app = express();  //created express object
const dotenv = require('dotenv');
dotenv.config(); 
const PORT = process.env.PORT; 

//Database Connection
const dbConnect = require('./DBConnection');
dbConnect();








app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`);
})