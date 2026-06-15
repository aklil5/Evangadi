// Questions on functions
// ********************
// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function



// function myFirst() {
//     console.log("Hello");
// }
// myFirst()






// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// // ○ Feel free to give any value as a parameter in your function

// function mySecond(a) {
//     console.log(a);
// }
// // mySecond(12)











// Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console

// function myThird(b) {
//     mySecond(b);
// }
// myThird(3)











// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.

// function myFourth(arr) {
//     if (arr && arr.length > 0) {
//         console.log(arr[0]);
//     }
        
// }

// myFourth([])










// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console


// function myFifth([num1, num2]){
//     if (!isNaN(num1) && !isNaN(num2)) {
//         console.log(num1 + num2);
//     }
// }

// myFifth([1, 4, 5])








// Question 10 (not from edabit.com)
// ● Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array

// function threeTimes([a, b]) {
//     return a * 3
// }

// console.log(threeTimes([3, 5, 6]))

// function threeTimes(arr) {
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "Invalid input"
//     }
//     const [first] = arr;
//     return first * 3
// }

// console.log(threeTimes([3, 6]))






// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

// function grade(a) {
//     if (a > 100 || a < 0) {
//         return "Invalid score"
//     } else if (a >= 90) {
//         return "Grade A"
//     } else if (a >= 80) {
//         return "Grade B"
//     } else {
//         return "Grade C"
//     }
// }

// console.log(grade(87))