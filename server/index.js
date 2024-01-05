const express = require("express");
const app = express();  //created express object
const cors = require('cors');
app.use(cors());
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config(); 
const PORT = process.env.PORT; 

//user Authentication 
const userAuthRouter = require("./routes/user.route");
app.use('/user',userAuthRouter);

//category API
const categoryRouter = require("./routes/category.route");
app.use('/category',categoryRouter);

//category API
const productRouter = require("./routes/product.route");
app.use('/product',productRouter);

//Database Connection
const dbConnect = require('./DBConnection');
dbConnect();






app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
  });
  

app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`);
})