console.log("My first module")


function myMultiplier(a) {
    return a * 2;
}

let twice = myMultiplier(4)
console.log(twice);


module.exports.myMultiplier2 = myMultiplier;



// Question 4
const number = 14;
module.exports.number = number