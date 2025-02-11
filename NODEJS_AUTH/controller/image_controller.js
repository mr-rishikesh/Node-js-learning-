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
        // line 47 to 58 used to like page system in which one page 2 images contains 
        // this is dynamic as per user useses 
        const page = parseInt(req.query.page) ||1;
        const limit = parseInt(req.query.limit) || 2;
        const skip = (page -1)*limit;
        const sortBy = req.query.sortBy || "createdAt";
        const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
        const totalImages = await Image.countDocuments();
        const totalPages = Math.ceil(totalImages / limit);

        const sortObj = {};
        sortObj[sortBy] = sortOrder;

        const images = await Image.find().sort(sortObj).skip(skip).limit(limit);


        // getting all images
       // const images = await Image.find({});
        res.status(201).json({
            success : true ,
            currentpage : page ,
            totalpage : totalPages ,
            totalImages : totalImages,
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