const express = require('express')
const app = express();
app.get('/' , (req , res) => {
    res.end("Home page")
})

app.get('/products' , (req ,res) => {
    const products = [ {
        id : 1 ,
        name : "phone"
    },
    {
        id : 2 ,
        name : "phone"
    }, {
        id : 3 ,
        name : "leptop"
    }]
    res.json(products)
})

// for the dynamic url ,,,, for the single product
app.get("/products/:ID" , (req , res) => {
    const productId = parseInt(req.params.ID); // this ID same as the  this ID -> "/products/:ID"
    const products = [ {
        id : 1 ,
        name : "phone"
    },
    {
        id : 2 ,
        name : "phone"
    }, {
        id : 3 ,
        name : "leptop"
    }]
    const getSingleProduct = products.find((product) => product.id === productId);
    if(getSingleProduct) {
        res.json(getSingleProduct)
    }
    else res.status(404).send("Something went wrong");

})

const port = 3000;
app.listen(port , () => {
    console.log(`Server is running at port ${port}`)
})