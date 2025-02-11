require("dotenv").config();
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const registerUser = async(req , res) => {
    try {
        // extract user information from our body 
        const {username , email , password , role } = req.body;
        // check user exist or not , means this user already registred

      const checkUserExist = await User.findOne({$or : [{username} , {email}]});
        if(checkUserExist) {
            console.log("This user with this email or username already exists");
          return  res.status(200).json({
                success : false ,
                message : "This user with this email or username already exists"
            })
        }
        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        const newlyCreatedUser = new User({
            username ,
            email ,
            password : hashedPassword,
            role : role 
        })
       await  newlyCreatedUser.save();

       if(newlyCreatedUser) {
          res.status(201).json({
            success : true ,
            message : "User successfully created"
          })
       }
       else res.status(400).json({
        success : false ,
        message : "Unable to create user! please try again later"
       })

    
        
    } catch (error) {
        console.log("Something went wrong" , error);
        res.status(500).json({
            success : false,
            message : "user not registered"
        })
        
    }
} 

const loginUser = async(req , res) => {
    try {
        const {username , password} = req.body;
        //check whether username exist or not 
        const user = await User.findOne({username});
        if(!user) {
            console.log("User not found")
            res.status(400).json({
                success : false ,
                message : "Invalid credentials (User not exists)!"
            })
            return ;
        }
        // check the password match or not with previous password 
        const isPasswordMatch = await bcrypt.compare(password , user.password);
        if(!isPasswordMatch) {
            console.log("Incorrect Password")
            res.status(400).json({
                success : false ,
                message : "Incorrect Password!"
            })
            return;
        }
        // creating user token 
        const accessToken = jwt.sign({
            userId : user._id ,
            username : user.username ,
            role : user.role
        } , process.env.JWT_SECRET_KEY , {expiresIn : "15m"})

        res.status(201).json({
            success : true ,
            message : "Successfully logied in ",
            accessToken
        })

        return;

         
    } catch (error) {
        console.log("Something went wrong");
        res.status(500).json({
            success : false,
            message : "user not Loggined"
        })
        
    }

}
 const changePassword = async (req , res) => {
    try {
        
   
    const userId = req.userInfo.userId;
   // console.log(userId)
    const user = await User.findById(userId)
    if(!user) {
        return res.status(400).json({
            succes : false ,
            message : "user not exists"
        })
    } 
    const {oldPassword , newPassword} = await req.body;
    const isPasswordMatch = await bcrypt.compare(oldPassword , user.password);
    if(!isPasswordMatch) {
        return res.status(400).json({
            success : false ,
            message : "Previous password not matched"
        })
    }
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword , salt);
    user.password = hashedPassword;
    await  user.save();
    return res.status(200).json({
        success : true ,
        message : "Password changed successfully!"
    })

    


     } catch (error) {
           console.log("Something went wrong");
            res.status(500).json({
            success : false,
            message : "user not Loggined"
        })
    }

 }

module.exports = {registerUser , loginUser , changePassword};    