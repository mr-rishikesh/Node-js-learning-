require("dotenv").config();
const express = require("express");
const ConnectDB = require("./database/db")
const authRoutes = require("./routes/auth_route");
const homeRoutes = require("./routes/home_routes");
const adminRoutes = require("./routes/admin_routes.js");
const authMiddleware = require("./middleware/auth_middleware")
const checkAdmin = require("./middleware/checkAdmin.js")
const uploadImageRoutes = require("./routes/image_routes.js")
const app = express();

const PORT = process.env.PORT || 3000;
ConnectDB()
app.use(express.json());
app.use("/api/auth" , authRoutes)
app.use("/api/home" , authMiddleware, homeRoutes)
app.use("/api/admin" ,authMiddleware ,checkAdmin ,  adminRoutes) //
app.use("/api/image" ,uploadImageRoutes) //

app.listen(PORT , () => {
    console.log(`server is running at port ${PORT}`)
})

