const http = require('http')

// Question 6

const server = http.createServer((req, res) => {
    res.write(newNo)
    res.end("Request received and processed")
})


server.listen(1234, (err) => {
    if (err) console.log("Error:", err);
    console.log("Server running");
})



// Question 7
let {random} = require('./randomNumber.js')

let newNo = "the random number generated is " + random() + "\n"
// console.log(newNo);





// ========================

// Re-Done The answer of questions 6-9 including apple static page

const http = require('http')
const fs = require('fs')

const mimetypeslookup = require('mime-types').lookup


// Question 6

const server = http.createServer((req, res) => {
    // res.write(gen)
    // res.end("Request received and processed")

    let requestedFile = req.url;

    if (requestedFile == "/"){
        requestedFile = "/index.html"
    }

    let filePath = __dirname + "/static/apple-html-css-replica" + requestedFile

    fs.readFile(filePath, (err, data) => {
        if (err) res.end("File Not Found 404")  
        else {
            let fileType = mimetypeslookup(filePath)
            res.writeHead(200, { "Content-Type": fileType})
            res.end(data)
        }
    })

}).listen(1234, () => {
    console.log("Server Running");
})



// let { gen } = require("./randomNumber.js")
// console.log(gen);
