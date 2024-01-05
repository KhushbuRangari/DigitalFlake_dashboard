const mongoose = require('mongoose');

const dbConnect= async ()=>{
   try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("Database Connected Successfully");

   } catch (error) {
        console.log(`database not connected ${error.message}`);
   }

}

module.exports = dbConnect;