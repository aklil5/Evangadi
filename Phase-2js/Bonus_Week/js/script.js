
// // String Search
// var str = "Abebe beso bela!"
// var n = str.search("beso")
// console.log(n);
// // 6


// // String Search with RegEx
// var str = "Abebe beso bela!"
// var n = str.search(/Beso/i)
// console.log(n);





// var str = "Abebe beso bela!"
// var n = str.replace("bela", "teta")
// // console.log(n);

// n = str.replace(/Bela/i, "teta")
// let m = str.replace(/b/g, "B")
// console.log(n);
// console.log(m);






// var str = "Abebe beso bela!"
// var n = str.match(/bela/i)
// var m = str.match(/be/i);
// var o = str.match(/be/gi)

// console.log(m);
// console.log(n);
// console.log(o);

// // OUTPUT
// // [ 'be', index: 1, input: 'Abebe beso bela!', groups: undefined ]
// // [ 'bela', index: 11, input: 'Abebe beso bela!', groups: undefined ]
// // [ 'be', 'be', 'be', 'be' ]



// // TEST
// let str = "abebe beso bela"
// let patt = /bela/i
// let result = patt.test(str)
// console.log(result);



// exec()
let str = "abebe beso bela"
let patt = /bella/i

let result = patt.exec(str)
console.log(result);