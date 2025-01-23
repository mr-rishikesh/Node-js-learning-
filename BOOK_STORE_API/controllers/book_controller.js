const Book = require("../models/book")


const getAllBooks = async (req , res) => {
    try {
        const allBooks = await Book.find({});
        //console.log("All books " , allBooks)
        if(allBooks.length > 0) {
              res.status(200).json({
                success : true ,
                message : "book fetched successfully" ,
                data : allBooks
              })
        }
        else {
            res.status(404).json({
                success : false ,
                message : "No book found in the database"
            })
        }
      
        
    } catch (error) {
        console.error(error);
        
    }

}
const getSingleBookById = async (req , res) => {
    try {
        const bookId = req.params.id;
        const bookdetailesById = await Book.findById(bookId);
        if(!bookdetailesById) {
            res.status(404).json({
                message : "Book with this id not found"
            })
        }
        else res.status(200).json({
            success : true,
            data : bookdetailesById
        })
        
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong"
        })
        
    }
    
}
const addBook = async (req , res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if(newBookFormData) {
            res.status(201).json({
                message : "Book successfully created" , 
                data : newlyCreatedBook
            })
        }
        
    } catch (error) {
        console.error("Error Found Here " , error)
        
    }
    
}
const updateBook = async (req , res) => {
    try {
        const currentBookFormData = req.body;
        const currBookId = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(currBookId , currentBookFormData , {
            new : true
        });
        if(updatedBook) {
            res.status(200).json({
                message : "Book updated successfully",
                data : updatedBook
            })

        }
        else res.status(404).json({
            message : "Please provide valid id"
        })

        
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong"
        })

        
    }
    
    
}
const deleteBook = async (req , res) => {
    try {
        const deleteBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(deleteBookId);
        if(deletedBook) {
            res.status(200).json({
                message : "Book deleted successfully",
                data : deletedBook
            })

        }
        else res.status(404).json({
            message : "Please provide valid id"
        })
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong"
        })
        
    }
    
}

module.exports = {getAllBooks , getSingleBookById , addBook , updateBook , deleteBook}