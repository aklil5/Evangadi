// to solve name collision, there are three methods

// 1. put them in {} as an object

// instead of
// var a = 7;

// var a = 12;

// console.log(a); //12

// var name = {
//     a: 7,
//     b: 12
// }

// var tu = {
//     a: 5,
//     b: 15
// }

// console.log(name.a);
// console.log(tu.a);


// 2. wwrap it in brace (parentesis) - for functions

// (c = () => console.log("abebe"))


// (c = () => console.log("kebe"))

// c()


// 3. IIFE - immediately invoked function expression
// - they can be annonymous

// (function () {
//     console.log("Dev A")
// })();


// (function () {
//     function x() {
//         console.log("Hello")
//     }
//     x()
// })()






// // USING COMMONJS STANDARD

// const vars = require('./abebe.js')

// console.log(vars.aklilu);
// console.log(vars.kk);

// console.log(vars.add(2, 5));


// // ORRR

// // since its an object, we can destructure it using

// // const {aklilu, kk} = require('./abebe.js')
// // const {add} = require('./abebe.js')




// console.log(aklilu);
// console.log(kk);

// console.log( add(2, 5));





let who = require('./abebe.js')

// console.log(who.name);

let {age} = require("./abebe.js")
console.log(age);