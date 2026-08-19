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





// const server = http.createServer((req, res) => {
//     let filePath = req.url

//     if (filePath == "/") {
//         filePath = "/index.html"
//     }
    
//     // to GET THE REQUESTED URL
//     let requested = __dirname + "/august" + filePath
//     console.log(requested);



//     fs.readFile(requested, (err, content) => {
//         if (err) {
//             // Custom 404 Page
//             filePath = "/notFound.html"
//             let page404 = __dirname + "/august" + filePath;

//             fs.readFile(page404, (err, content) => {
//                 res.writeHead(404, { "Content-Type": "text/html"});
//                 res.end(content)
//             })

//         } else {
//             res.writeHead(200, { "content-type": "text/html"})
//             res.end(content)
//         }
//     })

// }).listen(4000, () => {
//     // to confirm its connecting
//     console.log("Listening on http://localhost:4000");
// })





// // ---------------------------
// // LOADING PUPPY LOVERS PAGE

// const server = http.createServer((req, res) => {
//     let filePath = req.url

//     if (filePath == "/") {
//         filePath = "/index.html"
//     }
    
//     // to GET THE REQUESTED URL
//     let requested = __dirname + "/Puppy_Bootstrap" + filePath
//     console.log(requested);



//     fs.readFile(requested, (err, content) => {
//         if (err) {
//             // Custom 404 Page
//             filePath = "/notFound.html"
//             let page404 = __dirname + "/Puppy_Bootstrap" + filePath;

//             fs.readFile(page404, (err, content) => {
//                 res.writeHead(404, { "Content-Type": "text/html"});
//                 res.end(content)
//             })

//         } else {
//             res.writeHead(200, { "content-type": "text/html"})
//             res.end(content)
//         }
//     })

// }).listen(4000, () => {
//     // to confirm its connecting
//     console.log("Listening on http://localhost:4000");
// })


// -----------------------

// THE PROBLEM HERE IS IT READS EVERY FILE AS HTML/TXT -> WHETHER ITS CSS OR JS

// if you were to go to this page
// http://localhost:4000/css/styles.css

// if would see the css as a text

// or this one http://localhost:4000/images/puppy-1.jpg
// will just show a bunch of text instead of IMAGE
// why
// since we specified the content-type to be text/html, if we hadn't, it would have loaded the image itself


































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






// // THESE 2  VS BRUKE'SSSSSSSSSSSSSSSSSSSSS






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


 

















// ************* SERVING OUR STATIC APPLE and puppy WEBSITE WITH HTTP

// **************************************

// we use only three modules
// fs, http and mime-types

// we will have to download the module mime-types and use the lookup method to identify the type of a file

// install it using `npm i  mime-types`

// You can then find it in your package.json as dependency

// const mimetypelookup = require("mime-types").lookup;  // this is a method -> mimetypelookup(filename)

// const server = http.createServer((req, res) => {
//     let filePath = req.url

//     if (filePath == "/") {
//         filePath = "/index.html"
//     }
    
//     // to GET THE REQUESTED URL
//     let requested = __dirname + "/Puppy_Bootstrap" + filePath
//     // console.log(requested);



//     fs.readFile(requested, (err, content) => {
//         if (err) {
//             res.writeHead(404);
//             res.end(content)
//         }
//          else {
//             let mime = mimetypelookup(filePath) 
//             res.writeHead(200, { "content-type": mime })
//             res.end(content)
//         }
//     })

// }).listen(5000, () => {
//     // to confirm its connecting
//     console.log("Listening on http://localhost:4000");
// })





// Apple.com static web

// const mimetypelookup = require("mime-types").lookup;  // this is a method -> mimetypelookup(filename)

// const server = http.createServer((req, res) => {
//     let filePath = req.url

//     if (filePath == "/") {
//         filePath = "/index.html"
//     }
    
//     // to GET THE REQUESTED URL

//     // we can do it without __dirname, starting from a folder
//     let requestedFile = "./AppleBootstrapProject" + filePath
//     // console.log(requestedFile);



//     fs.readFile(requestedFile, (err, content) => {
//         if (err) {
//             res.writeHead(404);
//             res.end(content)
//         }
//          else {
//             let fileType = mimetypelookup(filePath) 
//             res.writeHead(200, { "content-type": fileType })
//             res.end(content)
//         }
//     })

// }).listen(5000, () => {
//     // to confirm its connecting
//     console.log("Listening on http://localhost:5000");
// })






















// ********** SERVING OUT STATIC APPLE WEBSITE WITH EXPRESS

// ******************************************

// there are inefficient ways http operates such as
// not knowing by default
    // '/' means index.html, 
    // not identifying / assigning the mime type, 
    // defining default file path
    // response is sent

// ALL THIS CAN BE DONE WITH the ""STATIC METHOD"""

// - npm i express --save




// =================================================
// SERVING SIMPE MESSAGE WITH EXPRESS


// const express = require("express")

// // express() is like when we used createServer() in our http module

// const app = express()
// this creates an instance of an Express application

// // the app object now has access to all of the methods in express module such as
//     // listen() method
    


// app.listen(3000, (err) => {
//     console.log("Listening to port 3000");
// })


// // next we have to set up routes
//     // Home page route
//     // Returning "Hello Express"

// app.get("/", (req, res) => {
//     console.log(req.url);
//     res.send("<h1>Hello Express!!</h1>")
//     // it determines and includes the content HEADER  and all the other heads like status code, etag for us
// })


// app.use(express.static("apple"))
    // serves static files like html, css, image, js

// app.use((req, res) => {
    // res.send("Page not Found 404")
// })

    // Acts like a catch-all route handler for non-existent pages
    // this function matches every single incoming HTTP request. However, it only executes if no previous middleware or route handler matched the request first.



// =============================================================================
// SERVING STATIC FILES WITH EXPRESS


// const express = require("express")

// const app = express()

// app.use(express.static("AppleBootstrapProject"))

// // non existing routes
// app.use((req, res) => {
//     res.send("Page Not Found 404")
// })


// app.listen(5000, (err) => {
//     if(err) {
//         console.log("Error found" + err);
//     }
//     console.log("Listening on: http://localhost:5000");
// })


// middleware - request tekemto, melso eskilk dres mahl lay masgebat metfelgutn functionalities add mtaregubet
    // use()
        // it can use the methods req(), res()

// middleware is a function that sits directly in the path of an incoming HTTP request, executing logic before that request reaches your final route handler or sends a response back to the client.



// static method - serve this folder with static website for me





// VIDEO

const express = require("express")

const app = express()

// const http = require("http")
// console.log(http.METHODS);
// console.log(http.STATUS_CODES);


app.get("/", (req, res) => {
    console.log(req.headers); // all the info browser sent to us in the request
    console.log(req.url);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.path);  // the path part of the url
    console.log(req.query);  
    console.log(req.subdomains);  
    console.log(req.query);  
    console.log(req.params); //details for /use/72  or /product/234234  


    res.status(404).end()
})
// will HANDLE GET REQUEST FOR THIS URL



// app.post()


app.listen(5000, (err) => {
    if (err) {
        console.log("There was a problem", err);
    } else {
        console.log("Listening on port 5000");
    }
})



// MIDDLEWARE

app.use() // is gonna run for every request






























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