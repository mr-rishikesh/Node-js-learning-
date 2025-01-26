require("dotenv").config();
const mongoose = require("mongoose")


const MONGO_URI = process.env.MONGO_URI;

const ConnectDB = async () => {
    try {
        mongoose.connect(MONGO_URI).then(() => console.log("Database connected successfully")).catch((err) => console.log(err)
        )

        
        
    } catch (error) {
        console.log("Database connection failed" , error);
        
        
    }
}
module.exports = ConnectDB