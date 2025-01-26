const express = require("express");
const router = express.Router();

router.get("/welcome" , (req , res) => {
    res.status(200).json({
        message : "Welcome to admin page"
    })
})
module.exports = router