const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
    url : {
        type : String ,
        required : true

    },

    publicId : {
        type : String ,
        required : true
    },


    uploadedBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User' ,
        required : true 
    },
    createdAt : {
        type : Date ,
        default : Date.now
    }


} , {timestamps : true})

module.exports = mongoose.model('Image' , ImageSchema)