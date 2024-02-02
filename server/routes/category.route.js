const express = require('express');
const categoryRouter = express.Router();
const {addCategory,getAll} =require('../controller/category.controller');
const jwtVerify = require("../middleware/jwtVerify.middleware");


//category add API
categoryRouter.post('/api/add',jwtVerify,addCategory);

//fetching all the category 
categoryRouter.get('/api/getAll',jwtVerify,getAll)



module.exports = categoryRouter;