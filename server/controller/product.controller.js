

const productModel = require('../model/product.model');

const addProduct = async (req, res) => {
    try {
      const { name, packSize, price, status, category } = req.body;
      const imgURL = req.file.path; // Assuming multer has been used to upload the file
      if (name === '' || packSize === '' || price === '' || status === '' || category === '') {
        return res.status(400).json({
          message: "All the fields are required"
        });
      }
  
      const productData = new productModel({
        name: name,
        packSize: packSize,
        price: price,
        imgURL: imgURL,
        status: status,
        category: category
      });
  
      const newProduct = await productData.save();
      if (!newProduct) {
        return res.status(404).json({
          message: "Not added"
        });
      }
      res.status(200).json({
        status: true,
        message: "New Product Added Successfully",
        newProduct
      });
    } catch (error) {
      console.log(error, "error in getting All product");
      res.status(500).json({
        message: `Something went wrong while getting product ${error.message}`
      });
    }
  };
const getAll = async (req, res) => {
    try {
        const getProdData = await productModel.find();
        res.status(200).json({
            status: true,
            message: "success",
            getProdData
        });
    } catch (error) {
        console.log(error, "error in getting All product");
        res.status(500).json({
            message: `Something went wrong while getting product ${error.message}`
        });
    }
};

module.exports = { addProduct, getAll };
