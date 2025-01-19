const http = require('http')
const port = 3000;

const server = http.createServer((req , res) => {
    
        res.writeHead(200 , {"Content-Type" : "text"}) 
        res.end("Home page")
   

} )

server.listen(port  , () => {
    console.log(`server is listining at port ${port}`);
})
