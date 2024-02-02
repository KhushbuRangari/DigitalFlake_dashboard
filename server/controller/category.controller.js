
const categoryModel = require("../model/category.model");

const addCategory = async (req,res)=>{
   try {
    const {name,description,status}=req.body;
    if(name==''||description==''|| status==""){

        res.status(400).json({
            message:"All the fields are required"
        })
    }

    const categoryData =  new categoryModel({
        categoryName:name,
        categoryDescription:description,
        status:status
    })

    const newCategory= await categoryData.save();
    if(!newCategory){
        res.status(404).json({
            message:"Not added"
        }) 
    }
    res.status(200).json({
        status:true,
        message:"New category Added Successfully",
        newCategory
    })

   } catch (error) {
    console.log(error, "Category Data not Added");
    res.status(500).json({
        message:`Something went wrong when adding Category ${error.message}`
    })
   }

}

const getAll = async (req,res)=>{
    try {
               
        const getCatData = await categoryModel.find();

        // console.log(getCatData);
        if(!getCatData){
            res.status(404).json({
                message:"category not found"
            })
        }
        res.status(200).json({
            status:true,
            message:"success",
            getCatData
        })

        
    } catch (error) {
        console.log(error, "error in getting All category");
        res.status(500).json({
            message:`Something went wrong while getting Category ${error.message}`
        })
    }
}

module.exports = {addCategory,getAll}