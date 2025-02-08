require("dotenv").config();
const jwt = require("jsonwebtoken")



const authMiddleware = (req , res , next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token) {
        return res.status(400).json({
            success : false ,
            message : "Access Denid ! no token provided , login again "
        })
       
    }

    try { //  below codes are very important if user are verified then we are putting 
        // the values of user { id , username , password} in the req.userInfo 
        // and the information we are using in the future for the usage of the pass and etc
        
            const decodedTokenInfo = jwt.verify(token , process.env.JWT_SECRET_KEY);
         req.userInfo = decodedTokenInfo
         console.log(decodedTokenInfo)
            next();
        
        
    } catch (error) {
        return res.status(500).json({
            success : false ,
            message : "Access Denid ! no token provided , login again later "
        })
    }





   
}

module.exports =authMiddleware