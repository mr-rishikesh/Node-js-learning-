const Image = require("../models/image");
const {uploadToCloudinary} = require("../helpers/cloudinary_helper");
const fs = require("fs")

const uploadImage = async(req , res) => {
    try {
        // chek file is given or not 
        if(!req.file) {
             res.status(400).json({
            success : false ,
            message : "Please Upload the file "
        })}
        //upload to cloudinary
        const {url , publicId} = await uploadToCloudinary(req.file.path);

        // store the image url and public id along with uploaded by 
        const newlyUploadedImage = new Image({
            url ,
            publicId,
            uploadedBy : req.userInfo.userId
        })
        await newlyUploadedImage.save();
        // delete from local storage 
        fs.unlinkSync(req.file.path)

        res.status(201).json({
            success : true ,
            message : "Image successfully uploaded" ,
            image : newlyUploadedImage
        })



    } catch (error) {
        console.log("error found ! try after some time" , error) 
        res.status(500).json({
            success : false ,
            message : "Image not uploaded try again"
        })
       
    }
    
    
} 
const fetchImagesController = async(req , res) => {
    try {
        // getting all images
        const images = await Image.find({});
        res.status(201).json({
            success : true ,
            message : "fetched all  images" ,
            data : images
        })
        
    } catch (error) {
        console.log("error found ! try after some time" , error) 
        res.status(500).json({
            success : false ,
            message : "Image not fetched try again"
        })
       
        
    }
}

module.exports = {uploadImage , fetchImagesController}