const cloudinary = require("../config/cloudinary")

const uploadToCloudinary = async(filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return {
            url : result.secure_url ,
            publicId : result.public_id
        }
        
    } catch (error) {
        console.error("Error when file uploading " , error);
        throw new Error("Error when file uploading")
        
    }
}



module.exports ={ uploadToCloudinary }