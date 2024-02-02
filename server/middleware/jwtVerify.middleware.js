const jwt = require('jsonwebtoken');

const jwtVerify = async (req,res,next)=>{
    try {

        if (!req.headers.authorization) {
            console.log(`Unauthorized: No token provided. ${req.url}`);
            return res.status(400).json({
              message: `Unauthorized to access`
            });
          }
        if(req.headers.authorization && req.headers){

            const beararToken = req.headers.authorization;
            const token = beararToken.split(" ")[1];

            const decode = await jwt.verify(token,process.env.SCRETE_KEY);
            if(!decode){
                return res.status(400).json({
                    message:'token not valid '
                })
            }
            next();
        }
        
    } catch (error) {
        console.log(error,"error from jwt midleware")
        return res.status(400).json({
            message:`Something went wrong ${error.message}`
        })
    }
}

module.exports = jwtVerify