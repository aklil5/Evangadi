// // os MODULE

// const os = require('os')

// // // console.log(os);
// console.log("Platform:", os.platform());
// console.log("CPU Architecture:", os.arch());
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());








// ============================================
// // fs MODULE

// const { readdir, mkdir, readFile, writeFile } = require("fs")

// readdir("abebe", (err, files) => {
//     if (err) console.log("error", err);
//     else console.log(files);
// })


// mkdir("./abebe/kebede/almaz", { recursive: true }, (err, path) => {
//     if (err) console.log("error", err);
//     console.log(path);  // if recursive is false it returns undefined - ({ recursive: true }) - this option is used to create parent directories if they don't exist.
// } )

// readFile("example.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     else console.log(data);
// })

// writeFile("abebe.txt", "Hello Classes", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });




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




// // ==========================
// // Events core module
// const events = require("events");
// const eventEmitter = new events.EventEmitter();

// // create event handler
// const myEventHandler = function() {
//     console.log("Abet, selam new");
// }

// // assign event handler to event listener
// eventEmitter.on("Abebe", myEventHandler);

// // fire/trigger the event
// eventEmitter.emit("Kbebe")





// // =============================
// // Path MODULE


// // __filename
// // __dirname
// // basename
// // dirname

// const { Server } = require('http');
// const path = require('path');
// // console.log(path);

// let pathObj = path.parse(__filename)
// console.log(pathObj);     // information about the math: bath, room, base, extension, name

// console.log(pathObj.ext);     // only to see the file extension

// console.log(__filename);
// console.log(__dirname);

// const filePath = path.join(__dirname, "example.txt")
// console.log("File Path:", filePath);


// const baseName = path.basename(filePath);
// console.log("Base name:", baseName);     // AKA only the file name


// const dirName = path.dirname(filePath);
// console.log("Directory Name:", dirName);











