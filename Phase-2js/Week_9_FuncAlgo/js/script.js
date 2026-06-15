// function myCar(){
// 	var x = "Toyota";
// }
// console.log(x) //x not defined

// //VS

// {
// 	var y = "Red"
// }
// console.log(y) //Red



// ========================================================================
// ++++++++++++++++ 1. addition function

// STEPS steps
// 1. receive 2 numbers as arguments
// if input is number add them and return them
// else return error

// Define a function that takes 2 argts
// add the 2 number and save the result it on a variable
// return the var



// function adder(a, b) {
//     if (typeof a === "number" && typeof b === "number") {
//         let result = a + b;
//         return result;
//     }
//     else {
//         return "please enter nummber only"
//     }
// }

// console.log(adder(7, "2"))


// function add(a, b){
//     if (isNaN(a) || isNaN(b)){
//         return "i can only add numbers, please pro"
//     }
//     //parseInt - coverting a string to integer and drops the decimal so we can use 
//     // parseFloat
//     return parseFloat(a) + parseFloat(b);
// }

// console.log(add(7, "2"))
// isNaN is more recommended

// console.log(add(5, 7))
// console.log(add(54, "91"))
// console.log(add(5, "add"))


// console.log(isNaN(9))
// console.log(isNaN("9"))
// console.log(isNaN("9a"))


// console.log(typeof(9))
// console.log(typeof("9"))
// console.log(typeof("9a"))




// ++++++++++++++++ 2. area of triangle function
// function triangleArea(base, height) {
//     if (base <= 0 || height <= 0) {
//         return "please enter a positive number"
//     } else if (isNaN(base) || isNaN(height)) {
//         return "please enter Numerical value"
//     } 
//     return (base * height) / 2
// }

// // function triangleArea(base, height) {
// //     if ((base > 0 && !isNaN(base)) && (height > 0 || !isNaN(height))) {
// //     return (base * height) / 2
// //     }
// //     return "ERROR"
// // }

// console.log(triangleArea(2, 5)) 
// console.log(triangleArea(-2, 5));
// console.log(triangleArea(2, "two"));
// console.log(triangleArea("6", "6"))





//++++++++++++++++ 3. the soccer points function
// pseudo code

// declare a function that accepts 3 parameters, wins, draws and losses
// if wins, drwas and losses inputs (IF ALL INPUTS) are not numbers, ask for numbers
// if wins, drwas and losses input (IF ALL INPUTS)are -ve, ask for positive input
// else calculate the total point using wins * 3 + draws * 1





// function soccerPt(wins, draws, losses) {
//     if (isNaN(wins) || isNaN(draws) || isNaN(losses)){
//         return "Please enter number only"
//     } else if (wins < 0 || draws < 0 || losses < 0){
//         return "Please enter positive integer"
//     } else {
//         let totalPt = (wins * 3) + draws;
//         return "Total point is: " + totalPt;
//     }
    
// }

// console.log(soccerPt(2, 5, 3));
// console.log(soccerPt(2, "5", "3"));
// console.log(soccerPt(2, "five", "3"));



// function soccerPt(wins, draws, losses) {
//     if (Number.isInteger(wins) || Number.isInteger(draws) || Number.isInteger(losses) && (wins >= 0 || draws >= 0 || losses >= 0)){
//         let totalPt = (wins * 3) + draws;
//         return "Total point is: " + totalPt;
//     } else{
//         return "Please enter positive numerical value"
//     }
// }
// // not strict with strings









//++++++++++++++++ 4 the minute to second converter function

// define a function that accepts mins as argt
// if input is not number  - pls input number
// if input is -ve - please enter
// else second = min * 60

function minSec(mins) {
    if (isNaN(mins)) {
        return "Please enter numerical value"
    } else if (mins <= 0) {
        return "please enter a positive value"
    } else {
        let seconds = mins * 60;
        return seconds;
    }
}
// console.log(minSec(7))
// console.log(minSec("7"))
// console.log(minSec("seven"))

function convertDisplay(e){
    e.preventDefault();
    let input = document.getElementById("num");

    let inputValue = input.value;
    if(inputValue.length == 0){
        input.style.background = "pink";
        input.style.border = "red 2px solid"
    } else {
        input.style.background = "";
        input.style.border = "";
        let output = document.getElementById("result");

        output.textContent = minSec(inputValue);
    }
}

document.getElementById("minToSec").addEventListener("submit", convertDisplay)

// // Attach form submit listener so convertDisplay runs on submit
// const form = document.getElementById("minToSec");
// if (form) {
//     form.addEventListener("submit", convertDisplay);
// }
