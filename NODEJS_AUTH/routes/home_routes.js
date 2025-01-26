const express = require("express")
const router = express.Router();


router.get("/welcome" , (req , res) => {
    const {username , userId , role} = req.userInfo;
    res.json({
        message : "Welcome to home page",
        username ,
        userId ,
        role

    })
})

module.exports = router