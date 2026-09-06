

const http = require("http")
const server = http.createServer((req, res) =>{
    res.setHeader = "Content-Type", "text/html"

    if(req.url == "/" && req.method == "GET"){
        res.statusCode = 200

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home</title>
            </head>
            <body>

            <h1>Home page</h1>
            <p>Welcome to my simple node.js server</p>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            </body>
            </html>`)
    }

    
})

server.listen(5000, ()=>{
    console.log("This server is running on port 5000")
})