const http = require('http')
const port = 3000;

const server = http.createServer((req , res) => {
    const url = req.url;
    console.log(url);
    if(url === '/' ) {
        res.writeHead(200 , {"Content-Type" : "text"}) 
        res.end("Home page")
    }
    else if(url === "/projects") {
        res.writeHead(200 , {"Content-Type" : "text"}) 
        res.end("Projects page")
    }
    else {
        res.writeHead(404 , {"Content-Type" : "text"}) 
        res.end("Page Not Found")
    }

} )

server.listen(port  , () => {
    console.log(`server is listining at port ${port}`);
})
