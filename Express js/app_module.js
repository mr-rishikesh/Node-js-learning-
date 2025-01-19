const express = require("express");
const app = express();

app.set('view engine' , 'ejs') 
const port = 3000;
app.get('/' , (req , res) => {
    res.send("Home page ")

})
app.post('/api/data' , (req , res) => {
    res.json({
        message : "Data is received" , 
        data : req.body
    })
})

app.use((err , req , res , next) => {
    console.log(err.stack)
    res.status(500).send("Something went wrong")
} )

 
app.listen(port , () => {
    console.log(`Server is running at port ${port}`)
})