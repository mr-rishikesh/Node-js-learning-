const express = require("express")
const path = require('path');
const app = express();


// set ejs as a view engine 
app.set('view engine' , 'ejs');

// set the directory 
app.set('views' , path.join(__dirname , 'views'))

const products = [
    {
        id : 1 ,
        name : "product 1"
    },
    {
        id : 2 ,
        name : "product 2"
    },
    {
        id : 3 ,
        name : "product 3"
    }
];

app.get('/' , (req , res) => {
    res.render('home' , {title : "home" , products : products})
})
app.get('/about' , (req , res) => {
    res.render('about' , {title : "about"})
}) 

const port = 3000;

app.listen(port , () => {
    console.log("server is running");
})
