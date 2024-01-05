const express = require('express');
const productRouter = express.Router();
const {addProduct,getAll} =require('../controller/product.controller')
const jwtVerify = require("../middleware/jwtVerify.middleware");

//Add Product API
productRouter.post('/api/add',jwtVerify,addProduct);

//Getting ALl Products API
productRouter.get('/api/getAll',jwtVerify,getAll);
 
module.exports = productRouter;