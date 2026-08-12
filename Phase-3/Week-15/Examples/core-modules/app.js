// // os MODULE

// const os = require('os')

// // // console.log(os);
// console.log("Platform:", os.platform());
// console.log("CPU Architecture:", os.arch());
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());








// ============================================
// // fs MODULE

// Read from a file
// const fs = require('fs')
// fs.readFile('./abebe.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return
//     }
//     console.log(data);
// })


// Write to a file
// fs.writeFile("example.txt", "Hello, World", (err) => {
//     if (err) console.log(err);
//     console.log("File has been saved!");
// } )





// // =============================
// // Path MODULE


// // __filename
// // __dirname
// // basename
// // dirname

// const { Server } = require('http');
// const path = require('path');

// console.log(__filename);
// console.log(__dirname);

// const filePath = path.join(__dirname, "example.txt")
// console.log("File Path:", filePath);


// const baseName = path.basename(filePath);
// console.log("Base name:", baseName);


// const dirName = path.dirname(filePath);
// console.log("Directory Name:", dirName);













// ====================================
// BUILDING HTTP WEB SERVER
// ===========================

// http method turns your computer to a Server





// ***********DEFINING A WEB SERVER AND LISTENER

// *****************************


const http = require('http');

// function requestHandler(req, res){
//     // whatever u wanna do on the server
// }

// http.createServer(requestHandler)


// the common way is
// const server = http.createServer((req, res) => {
    
// })

// server.listen(5000)




// ************ SERVING A SIMPLE MESSAGE USING HTTP MODULE 

// ********************************

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url);  // / if nothing is added, could be /test /about depending on what u search
    // console.log(req.headers);   // object with host, connection.....
    // console.log("Request received");


    // res.write('<h1>Evangadi</h1>')
    // res.write('<h1>Hello September</h1>')


    // ******we can also specify d/t response with d/t url
    if (req.url == '/'){
        res.write("<h1>Hello Evang</h1>")
    } else if (req.url == '/about') {
        res.setHeader('content-type', 'text/html')
        res.statusCode = 200;

        // or to write (the status code and content tyupe) together
        res.writeHead(200, {
            "content-type": 'text/html'
        })
        res.write("<h1>About page</h1>")
        
    } else {
        res.write("<h1>Page Not Found</h2>")
    }

    // res.write() pushed data into the response stream, but keeps the connection open cause server may have more data to send later
    // res.end() tells Node.js "i am done writing data to this response. Close the HTTP headers/body connection and send it off"

    res.end("")   // to stop of from continuously loading?

})

server.listen(5000)

// use port numbers >1024 when listening
// server.listen(7897, function(){
//     console.log("It is listening");
// });



// http.createServer([options] [, requestListener])

// it takes 2 arguments, IncomingMessage and ServerResponse objects









// ***********SERVING STATIC FILES WITH HTTP

// ********************************






















// ************* SERVING OUR STATIC APPLE WEBSITE WITH HTTP

// **************************************
















// ********** SERVING OUT STATIC APPLE WEBSITE WITH EXPRESS

// ******************************************




