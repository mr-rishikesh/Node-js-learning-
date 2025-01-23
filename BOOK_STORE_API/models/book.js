const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : [true , 'book title is required'],
        trim : true ,
        maxLength : [100 , 'book title must not exceed 100 character']
    } ,
    author : {
        type : String , 
        required : [true , 'Book author name is required'],
        trim : true ,
        maxLength : [20 , 'Name must not exceed 20 character'] ,
        
      
    } ,
    date : {
        type : Number ,
        required :  [true , 'Publication Year is required'],
        min : [ 1000 , 'must be written after 1000'] , 
         max : [new Date().getFullYear() , "Dont give the future dates"]
    },
    createdAt : {
        type : Date ,
        default : Date.now
    }

})

module.exports = mongoose.model("Book" , BookSchema);