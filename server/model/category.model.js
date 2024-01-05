const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({

    categoryName:{
        type:String,
        required:true
    },
    categoryDescription:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const categoryModel = mongoose.model('category',categorySchema);
module.exports = categoryModel;