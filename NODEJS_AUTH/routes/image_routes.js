const express = require("express");
const authMiddleware = require("../middleware/auth_middleware")
const checkAdmin = require("../middleware/checkAdmin.js")
const {uploadImage} = require("../controller/image_controller.js");
const uploadMiddleware = require("../middleware/upload_middleware.js")

const router = express.Router();

// image upload router 

router.post("/upload" , authMiddleware , checkAdmin , uploadMiddleware.single('image') , uploadImage )




module.exports  = router