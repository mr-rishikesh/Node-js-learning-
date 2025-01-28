const express = require("express");
const authMiddleware = require("../middleware/auth_middleware")
const {checkAdmin , checkUser} = require("../middleware/checkAdmin.js")
const {uploadImage, fetchImagesController} = require("../controller/image_controller.js");
const uploadMiddleware = require("../middleware/upload_middleware.js")

const router = express.Router();

// image upload router 

router.post("/upload" , authMiddleware , checkAdmin , uploadMiddleware.single('image') , uploadImage )
router.get("/get", authMiddleware , fetchImagesController)




module.exports  = router