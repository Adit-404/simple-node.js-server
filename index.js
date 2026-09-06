

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

    else if(req.url == "/about" && req.method == "GET"){
        res.statusCode = 200

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About</title>
            </head>
            <body>

            <h1>About page</h1>
            <p>Hi, I'm Arafat Islam Adit. I'm a beginner MERN stact web devloper.</p>

            <nav>
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
            </nav>

            </body>
            </html>`)
    }

    else if(req.url == "/contact" && req.method == "GET"){
        res.statusCode = 200

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Contact</title>
            </head>
            <body>

            <h1>Contact page</h1>
            <p>You can contact us through Email: arafatislamadit2007@gmail.com</p>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>

            </body>
            </html>`)
    }

    else{
        res.statusCode = 404

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404</title>
            </head>
            <body>
                
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>

            <a href="/">Go to Home</a>
            
            </body>
            </html>`)
    }
})

server.listen(5000, ()=>{
    console.log("This server is running on port 5000")
})