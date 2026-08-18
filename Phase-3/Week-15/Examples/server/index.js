// ====================================
// BUILDING HTTP WEB SERVER
// ===========================

// http method turns your computer to a Server

// - with http module, you can create a server that listens for incoming HTTP requests and responds with data, such as:
    // Static files (HTML, CSS, JS, images)
    // JSON or
    // text










// ************ SERVING A SIMPLE MESSAGE USING HTTP MODULE 

// createServer() method
// ********************************

// const http = require("http");
// const server = http.createServer((req, res) => {
//     // res.setHeader("content-type", "text/html");
//     console.log("Request received");
//     res.writeHead(200);
//     res.end("Hello there")
// }).listen(999, () => console.log("Listening to port 999"))



// http.createServer([options] [, requestListener])

// it takes 2 arguments, IncomingMessage and ServerResponse objects
// (req, res) 
    // req- contains all the info sent by the client (Browser)
    // res - contains every property that needed to be sent back to the browser



// // ******** DEFINING A WEB SERVER AND LISTENER

// const http = require('http');

// function requestHandler(req, res){
//     // whatever u wanna do on the server
// }

// http.createServer(requestHandler)


// the common way is
// const server = http.createServer((req, res) => {
    
// })
// server.listen(5000)





// const server = http.createServer((req, res) => {
//     // console.log(req);
//     console.log(req.url);  // / if nothing is added, could be /test /about depending on what u search
//     console.log(req.headers);   // object with host, connection.....
//     console.log("Request received");


//     res.write('<h1>Evangadi</h1>')
//     res.write('<h1>Hello September</h1>')


// //     // ***********************
// //  // DIFFERENT RESPONSE FOR D/T ROUT/URL/REQ
// //     if (req.url == '/'){
// //         res.write("<h1>Hello Evang</h1>")
// //     } else if (req.url == '/about') {
// //         res.setHeader('content-type', 'text/html')
// //         res.statusCode = 200;

// //         // or to write (the status code and content tyupe) together
// //         res.writeHead(200, {
// //             "content-type": 'text/html'
// //         })
// //         res.write("<h1>About page</h1>")
        
// //     } else {
// //         res.write("<h1>Page Not Found</h2>")
// //     }

// //     // res.write() pushed data into the response stream, but keeps the connection open cause server may have more data to send later
// //     // res.end() tells Node.js "i am done writing data to this response. Close the HTTP headers/body connection and send it off"

// //     res.end("")   // to stop of from continuously loading?

// })

// server.listen(5000)

// use port numbers >1024 when listening
// server.listen(7897, function(){
//     console.log("It is listening");
// });



// const myServer = http.createServer((req, res) => {
//     console.log(req);
//     console.log(res);
// })

// myServer.listen(1234, () => {
//     console.log("server running on port 1234");
// })







// -------------------------------------------------

// ***********SERVING STATIC FILES WITH HTTP

// ********************************

// the browser first has to read the file abebe.html
// it has to only respond to abebe.html

const http = require('http');
const path = require('path')
const fs = require('fs')
const url = require('url')



// const server = http.createServer((req, res) => {

//     // to GET THE REQUESTED URL
//     let requested = req.url
//     // console.log(requested);


//     if (requested == "/") {
//         requested = "/index.html"
//     }

    
//     // console.log(pathname);

//     // D/T RESULT FOR D/T REQUESTS
//     if (requested == "/index.html"){
//         const filePath = path.join(__dirname, "august", "index.html")
//         fs.readFile(filePath, (err, content) => {
//             if (err) {
//                 res.writeHead(404, { "Content-Type": "text/html"});
//                 res.end("<h1>File Not Found<h1>")
//             } else {
//                 res.writeHead(200, { "Content-Type": "text/html" })
//                 res.write('<h1>Hi abe</h1>')
//                 res.end(content)
//             }
//         }) 
//     } else if (requested == "/about.html") {
//         const filePath = path.join(__dirname, "august", "about.html")
//         fs.readFile(filePath, (err, content) => {
//             if (err) {
//                 res.writeHead(404, { "Content-Type": "text/plain" })
//                 res.end("couldnt find about page")
//             } else {
//                 res.writeHead(200, { "Content-Type": "text/html" })
//                 res.end(content)
//             }
            
//         })
//     } 
//     else {
//         res.writeHead(404, { "Content-Type": "text/html" })
//         res.end("Not Abe??")
//     }
// }).listen(4000, () => {
//     // to confirm its connecting AND YOU CAN USE THIS LINK ON THE TERMINAL TO OPEN the server
//     console.log("Listening on http://localhost:4000");
// })





const server = http.createServer((req, res) => {
    let filePath = req.url

    if (filePath == "/") {
        filePath = "/index.html"
    }
    
    // to GET THE REQUESTED URL
    let requested = __dirname + "august" + filePath
    // console.log(requested);

    fs.readFile(requested, (err, content) => {
        if (err) {
            // Custom 404 Page
            filePath = "notfound.html"
            let page404 = __dirname + "august" + filePath;

            fs.readFile(page404, (err, content) => {
                res.writeHead(404, { "Content-Type": "text/html"});
                res.end(content)
            })

        } else {
            res.writeHead(200, { "content-type": "text/html"})
            res.end(content)
        }
    })

}).listen(4000, () => {
    // to confirm its connecting
    console.log("Listening on http://localhost:4000");
})







// const server = http.createServer((req, res) => {
    
//     const baseURL = `http://${req.headers.host || 'localhost'}`;
//     const parsedUrl = new URL(req.url, baseURL);
    
//     const filePath = parsedUrl.pathname;   // THIS IS TO GET THE FILENAME
//     // console.log(filePath);

//     if (filePath === '/favicon.ico') {
//         res.writeHead(204);
//         return res.end();
//     }
//     if (filePath == "/abebe.html") {
//         var requestedFile = __dirname + filePath;
//         fs.readFile(requestedFile, (err, content) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.end();
//             } else {
//                 res.writeHead(202, {"content-type": "text/html"})
//                 res.end(content)
//             }
//         })
//     } else {
//         res.write("Oh Noooo, not abe?")
//         res.end()
//     }

// }).listen(5000)

















// const server = http.createServer((req, res) => {
//     // console.log(req.url);

//     let reqPath = req.url // .parse method BREAKS THE URL STRING INTO STRUCTURED JS OBJECT
//     // console.log(parsedUrl)
    

//     if (reqPath == "/") {
//         reqPath = "/abebe.html";
//     }
    
//     // Safely joins path components using OS-specific file separators
//     const filePath = path.join(__dirname, reqPath);

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             res.writeHead(404);
//             res.end();
//         } else {
//             res.writeHead(200, {"content-type": "text/html"})
//             res.end(content)
//         }
//     })
    

// }).listen(5000)






// // THIS VS BRUKE'SSSSSSSSSSSSSSSSSSSSS


















// const server = http.createServer(function(req, res) {
    
//     let filePath = req.url;
//     // console.log(url); // ??????????????????????????????????????????????


//     // Manual path concatenation (risks double-slash bugs)
//     let requestedFile = __dirname  + filePath;
//     // console.log(requestedFile);

//     fs.readFile(requestedFile, (err, content) => {
//         if(err) {
//             res.writeHead(400);

//             // Overrides target to fallback HTML file
//             requestedFile = __dirname + "/notFound.html";

//             // Nested async read to load custom error page content
//             fs.readFile(requestedFile, (err, content) => {
//                 res.end(content);
//             });
//         } else {
//             res.writeHead(200, { "content-type": "text/html" });
//             res.end(content);
//         }
//     })

// })

// server.listen(5000, function(){
//     console.log("Listening on http:localhost:5000");
// })


 

















// ************* SERVING OUR STATIC APPLE WEBSITE WITH HTTP

// **************************************
















// ********** SERVING OUT STATIC APPLE WEBSITE WITH EXPRESS

// ******************************************














// 1. WHAT IS A WEB SERVER

// - web server is an application installed in specific computer that understands and handled requests by ClientRequest. communication is done using Hypertext Transfer Protocol (HTTP)

// local by flywhell


// -------------------------------------------------
// 2. WHAT DO WE MEAN BY HANDLING HTTP REQUUESTS
// http request is made by a client, to a names host, which is located on a server. 
// the aim of the request is to access a resource on the server.
// to make the request, client uses components of a URL (uniform resource locator)


// HTTP - application layer protocol - allows communication and exchange data
// is the messenger of the web
// is TCP/IP based protocol
// used to deliver contents - images, audio, video, document









// ----------------------------------------------
// 3. HOW TO CREATE A SIMPLE SERVER THAT RETURNS A SIMPLE MESSAGE


// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write("hi there")
//     res.write('<h1>i am aklile</h1>');
//     res.end()
// }).listen(2000)




// req object represents the incoming HTTP request form the client - browser or API client
// it contains info sent by the client, such as URL paths, headers, HTTP methods (GET, POST)

// res object represents the outgoing HTTP response that the server builds and sends back to the client.





// -----------------------------------------
// 4. WHAT DOES THE HTTP SERVER OBJECT INCLUDE?

// http server object has the following main methods inside it
    // listen() - makes server listen to ports on the computer, used to tell the specific port the server needs to listen
    // close() - closes the server connection (stops listening)
    // setTimeout() - sets the server's timeout value.






// ---------------------------------------------
// 5. DO YOU KNOW HOW TO SERVE STATIC FILES WITH HTTP

// - FIRST you read the file, then you serve it

// var fs = require('fs')
// var http = require('http')

// const server = http.createServer((req, res) => {
//     // fs.readFile(path, callback): An asynchronous method that reads the entire file off the hard drive. Once finished reading, it executes the callback function

//     fs.readFile(__dirname + req.url, function (err, data) {
//         if (err) {
//             res.writeHead(404)
//             res.end(JSON.stringify(err));
//             return;
//         }
//         res.writeHead(200);
//         res.end(data);
//     })
// }).listen(8080)
















// -------------------------------------------
// 6. DO YOU KNOW WHAT EXPRESS IS
















// ---------------------------------------------
// DO YOU KNOW WHY WE USE EXPRESS OVER THE HTTP MODULE

















// ---------------------------------------------
// DO YOU KNOW HOW HTTP REQUESTS ARE HANDLED USING EXPRESS













// DO YOU KNOW HOW TO SERVE STATIC FILES WITH EXPRESS?