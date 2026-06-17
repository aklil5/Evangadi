//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻

// var document = {
//     html: {
//         head: {
//             title: {
//                 value: "The title"
//             }
//         }
//     }
// }
// console.log(document.html.head.title.value); //The title

// document.html.head.title.value = "Another title"

// console.log(document.html.head.title.value); //Another title


// let red = document.getElementById("one")

// console.log(red)


// let blue = document.querySelector(".red");
// blue.className = "blue"


// console.log(document.querySelectorAll(".red"));



// let elem = document.getElementsByClassName("red")
// console.log(elem);  //length of 4 before elem[0] className was changed, after that length is 3

// // elem[0].className = "blue"  

// for (let i=0; i< elem.length; i++) {
//     elem[i].className = "blue"
// }



// Solution to the live updating is changing it to static array
// let temp = []
// for (let i = 0; i < elem.length; i++){
//     temp.push(elem[i])
// }
// console.log(temp);









// let el3 = document.getElementsByTagName("li")
// console.log(el3) // length dont change after the change of the first el3 className

// el3[0].className = "red"


// let elem3 = document.getElementsByTagName("li")
// console.log(elem3);

// // elem3[0].tag = "red"

// for (let i=0; i< elem3.length; i++) {
//     elem3[i].tagName = "h1"  // is it.className or .tagName
// }

// getElements byTagName is also live updating
// let myElements = document.getElementsByTagName("h2")

// // for (let i=0; i < myElements.length; i++) {
// // 	const elements = myElements[i]
// // 	elements.outerHtml = `<li>${elements.textContent}</li>`
// // }
// console.log(myElements);





// ===================================
// Traversing between multiple elements


let tanash = document.querySelector(".red").nextElementSibling

console.log(tanash);

let welaj = document.querySelector(".blue").parentNode
console.log(welaj);

let lj = document.getElementById("techCompanies").firstElementChild
console.log(lj);
