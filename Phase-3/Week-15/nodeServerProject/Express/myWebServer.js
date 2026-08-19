// const express = require('express')

// const app = express();

// const {random} = require("../randomNumber.js")

// app.get("/", (req, res) => {
//     let randomNo = "\n Random No is " + random()

//     res.send(`Request received and processed, ` + randomNo)

// })

// app.listen(1234, () => {
//     console.log("Server running")
// })

// Question 8

const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("server running on 5000");
});

app.use(express.static("static/apple-html-css-replica"));

// non existing routes
app.use((req, res) => {
  res.send("Page Not Found 404");
});




// Redone of all questions

const express = require("express");
const path = require("path");

const app = express();

let { newNo } = require("./randomNumber.js");

// random number
app.get("/", (req, res) => {
  res.send("Request received and processed " + newNo);
});

// To load only the about page
app.get("/about.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "static/apple-html-css-replica/about.html"),
  );
});

// to serve any of the pages in "static" folder
app.use(express.static("static/apple-html-css-replica"));

app.listen(1234, () => {
  console.log("Server running");
});

// non existing routes
app.use((req, res) => {
  res.send("Page Not Found 404");
});
