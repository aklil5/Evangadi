console.log("Hello there");

let test = "Hello world"
// test = "Haro"
// let test = "heroshima"

// alert(test)

//arithmetic operators

let num1 = 80;
let num2 = 15;

let result1;
let result2;

console.log(num1);

result1 = num1 + num2;
console.log(result1);

result2 = num1 * num2;
console.log(result2);

//string operators

let first_name = "Aklile";
let last_name = "z"
let fullname;

fullname = first_name + "" + last_name;
console.log(fullname);



console.log(4 === 4);
console.log(4 === "4");


const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("What is your name?", "Guest");
    output.textContent = "Hello, " + userName + "!";
})

console.log("abc" - 5)
console.log("abc" / 5)
console.log("abc" * 5)

console.log("10" - 5)
console.log("10" / 5)
console.log("10" * 5)