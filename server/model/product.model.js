const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    packSize:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    imgURL:{
        type:String,
    },
    status:{
        type:String,
        required:true
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "categories" 
    }
})

const productModel= mongoose.model('product',productSchema);

module.exports = productModel;