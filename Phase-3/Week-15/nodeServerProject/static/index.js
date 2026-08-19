const http = require('http')
const fs = require('fs')
const path = require('path')
const mimetypelookup = require('mime-types').lookup

const server = http.createServer((req, res) => {
    let requestedFile = req.url

    // the req.url needs to be declared by alone

    if (requestedFile == "/") {
        requestedFile = "/index.html"
    }

    let filePath = path.join(__dirname, "/apple-html-css-replica", requestedFile)
    // filePath should be declared after the if statement, since it wont get updated with / == /index.html info if not 

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.end("File Not Found 404")   // we need response whether err or not
        } else {

            let fileType = mimetypelookup(filePath)

            // res.setHeader("Content-Type", "text/html" )
            res.writeHead(200, { "Content-Type": fileType })
            
            res.end(content)
        }
    })
}).listen(1234, () => {
        console.log("Server running on http://localhost:1234");
})



















// const server = http.createServer((req, res) => {

//     let requested = req.url

//     let filePath = path.join(__dirname, "/apple-html-css-replica", requested)

//     if (requested == "/") {
//         requested = "/index.html"
        
//     }


//     fs.readFile(filePath, "utf8", (err, content) => {
//         if (err) {
//             res.end(404, "Page Not Found")
//         } else {
//             res.end(content)
//         }
//     })
    
// })
