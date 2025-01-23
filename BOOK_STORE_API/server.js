require('dotenv').config();

const connectDB = require('./database/db');
const bookRoutes = require("./routes/book_router");

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//connecting to our database
connectDB();

app.use(express.json());

// using books route
app.use("/api/books" , bookRoutes)

app.listen(PORT , () => {
    console.log(`Server is running ${PORT}`);
    
})
