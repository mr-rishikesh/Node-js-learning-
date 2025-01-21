const express = require("express");
const app = express();

app.use(express.json());
const books = [{id : 1 , title: 'book 1'}  ,{id :2 , title : 'book 2'} ];
// intro page for the book
app.get('/' , (req , res) => {
    res.json({
        message: 'Welcome to books API that provides all books info'
    })
})

app.get('/get' , (req , res) => {
    res.json(books);
})

app.get('/get/:id' , (req , res) => {
    const bookId = parseInt(req.params.id);
    const singleBook = books.find((book) => book.id === bookId)
    if(singleBook) res.json(singleBook);
    else res.status(404).send("Something went wrong");
})

// adding new books in our data base 
app.post('/add' , (req , res) => {
    const newBook = {
        id : books.length +1 , 
        title : `Book ${books.length +1}`
    }

    books.push(newBook);
    res.json({
        data : newBook , 
        message : `Book ${books.length } added Successfully`
    })
})

// updating the book title

app.put('/update/:id' , (req , res) => {
    const currnetBook = books.find(item => item.id === parseInt(req.params.id))
    if(currnetBook) {
        currnetBook.title = req.body.title || currnetBook.title;
        res.json({
            message :` Book title updated successfully ${currnetBook.title} ` , 
            currnetBook
        })
    }
    else res.status(404).json({
        message : "Please give the correct book id"
    })
})

// delete a book from the database 
app.delete("/delete/:id" , (req , res) => {
    const indexOfBook = books.findIndex(item => item.id === parseInt(req.params.id));

    if(indexOfBook !== -1) {
        const deletedBook = books.splice(indexOfBook , 1);
        res.json({
            message : "book sucessfully deleted" ,
             data : deletedBook[0]

        })
    }
    else res.status(404).json({
        message : "Please give the correct book id"
    })
})

const port = 3000;
app.listen(port , () => {
    console.log("server is running at port 3000");
    
})
