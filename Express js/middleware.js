const express = require("express")
const app = express();

const firstMiddleware = (req , res , next) => {
    const timeStamp  = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next();
}
app.use(firstMiddleware);

app.get('/' , (req , res) => {
    console.log("This is the home page")
    res.send("Home page")
})
app.get('/about' , (req , res) => {
    console.log("This is the about page")
    res.send("About page")
})

app.listen(3000 , () => {
    console.log("server is started at port 3000")
})