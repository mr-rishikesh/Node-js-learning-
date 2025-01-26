const express = require("express");
const router = express.Router();

const {registerUser , loginUser } = require("../controller/auth_controller")


router.post('/register', registerUser)
router.post('/login', loginUser)





module.exports = router