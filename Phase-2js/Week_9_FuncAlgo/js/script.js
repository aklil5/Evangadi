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



function adder(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        let result = a + b;
        return result;
    }
    else {
        return "please enter nummber only"
    }
}

console.log(adder(7, "2"))


function add(a, b){
    if (isNaN(a) || isNaN(b)){
        return "i can only add numbers, please pro"
    }
    //parseInt - coverting a string to integer and drops the decimal so we can use 
    // parseFloat
    return parseFloat(a) + parseFloat(b);
}

console.log(add(7, "2"))
// isNaN is more recommended


// ++++++++++++++++ 2. area of triangle function




//++++++++++++++++ 3. the soccer points function





//++++++++++++++++ 4 the minute to second converter function