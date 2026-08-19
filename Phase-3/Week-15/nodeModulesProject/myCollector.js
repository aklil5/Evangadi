// let {myMultiplier2} = require('./myFirst');

// let {myMultiplier3} = require('./mySecond');

// console.log(myMultiplier2(5));
// console.log(myMultiplier3(5));


// Questioon 4

let {number, myMultiplier2} = require('./myFirst')

let result = myMultiplier2(number)
let text = "The value of 14 when passed through the myMultiplied function is " + result

const fs = require('fs')

fs.writeFile("results.txt", text, (err) => {
    if (err) console.log(err);
    console.log("File has been saved");
})



// Question 5
let { myMultiplier3 } = require('./mySecond.js')

let newResult = myMultiplier3(number)
text += "\n The value of 14 when passed through the myMultiplier function is " + newResult

fs.writeFile("results.txt", text, (err) => {
    if (err) console.log(err);
    console.log("Second line is written");
})

