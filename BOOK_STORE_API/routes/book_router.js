const express = require("express")
const {getAllBooks , getSingleBookById ,addBook , updateBook , deleteBook} = require("../controllers/book_controller")
const router = express.Router()

// all routes are that are related to books only 

router.get('/get' , getAllBooks )
router.get("/get/:id" , getSingleBookById)
router.post("/add" , addBook)
router.put("/update/:id" , updateBook)
router.delete("/delete/:id" , deleteBook)

module.exports = router;