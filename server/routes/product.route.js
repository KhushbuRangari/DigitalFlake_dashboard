const express = require('express');
const productRouter = express.Router();
const { addProduct, getAll } = require('../controller/product.controller');
const jwtVerify = require("../middleware/jwtVerify.middleware");
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});
const upload = multer({ storage: storage });

// Add Product API with multer middleware for file upload
productRouter.post('/api/add', jwtVerify, upload.single('imgURL'), addProduct);

// Getting All Products API
productRouter.get('/api/getAll', jwtVerify, getAll);

module.exports = productRouter;
