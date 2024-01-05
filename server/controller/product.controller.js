const productModel = require('../model/product.model');

const addProduct= async (req,res)=>{
try {
    const {name,packSize,price,imgURL,status,category}=req.body;
    if(name==''||packSize==''||price==''||status==''||category==''){

        res.status(400).json({
            message:"All the fields are required"
        })
    }

    const productData =  new productModel({
        name:name,
        packSize:packSize,
        price:price,
        imgURL:imgURL,
        status:status,
        category:category
    })

    const newProduct= await productData.save();
    if(!newProduct){
        res.status(404).json({
            message:"Not added"
        }) 
    }
    res.status(200).json({
        status:true,
        message:"New Product Added Successfully",
        newProduct
    })



} catch (error) {
    console.log(error, "error in getting All product");
    res.status(500).json({
        message:`Something went wrong while getting product ${error.message}`
    })
}
}

const getAll = async (req,res)=>{
    try {
        const getProdData = await productModel.find();

        if(!getProdData){
            res.status(404).json({
                message:"product not found"
            })
        }
        res.status(200).json({
            status:true,
            message:"success",
            getProdData
        })

    } catch (error) {
        console.log(error, "error in getting All product");
        res.status(500).json({
            message:`Something went wrong while getting product ${error.message}`
        })
    }
    }
module.exports = { addProduct,getAll}