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

    try {
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