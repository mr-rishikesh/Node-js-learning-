const mongoose = require("mongoose");

const connectDB = async() => {
    try {
       await mongoose.connect('mongodb+srv://rishikeshkumar:rishikesh123@cluster0.lie6d.mongodb.net/');
       console.log("mongodb is connected successfully");
       
       
       

    } catch (error) {
        console.error("DB connection failed");
        process.exit(1);
        
    }
} 

module.exports = connectDB