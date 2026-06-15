// =========================
// Loops
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

// function numbers110(){
//     for (i=1; i<=10; i++) {
//         console.log(i)
//     }
// }
// numbers110();



// function numbers10(){
//     for (let i=1; i<=10; i++) {
//         return i
//     }
// }
// console.log(numbers10());

// use console.llog because return immediatelyy stops the function












// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

// function next5no(a) {
//     for(let i = a+1; i <= a+5; i++) {
//         console.log(i)
//     }
// }

// next5no(7)

// function printNext5(a) {
//     for (let i = 1; i<=5; i++) {
//         console.log(a + i);
//     }
// }

// printNext5(3)



// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// function sum(a) {
//     let total = 0
//     for (let i= a+1; i<= a+10; i++) {
//         total += i
//     }
//     return total
// }
// console.log(sum(7))









// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

// function elements(a) {
//     for(let i = 0; i< a.length; i++) {
//         console.log(a[i])
//     }
// }
// elements([1, "Hello", 8, 44])


// // UPGRADE
// function printElements(arr) {
//     for (const element of arr) {
//         console.log(element)
//     }
// }

// printElements([1, "helo", 8, 44])










// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

// function totalElements(a) { 
//     // let total = 0
//     // for (let i = 0; i < a.length; i++) {
//     //     total ++
//     // }
//     // return total
    
//     return a.length;
// }
// console.log(totalElements([1, "HI", 8, 44]))


// ONE LINER
// const totalElements = arr => arr.length;

// console.log(totalElements([1, "HI", 8, 44]))









// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0

// function sumArray(a) {
//     let total = 0;
//     for(let i=0; i< a.length; i++) {
//         total += a[i]
//     }
//     return total;
// }
// console.log(sumArray([5, 6, 99, 8, 76, 4, 68, 44]));







// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102



// function sumEvenOdd(a) {
//     let evenTotal = 0;
//     let oddTotal = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 == 0) {
//             evenTotal += a[i]
//         } else {
//             oddTotal += a[i]
//         }
//     }
//     return evenTotal - oddTotal;
// }

// console.log(sumEvenOdd([5, 6, 99, 8, 76, 4, 68, 44]));




// function sumEvenOdd(a) {
//     let evenTotal = 0;
//     let oddTotal = 0;
//     for (const num of a) {
//         if (num % 2 == 0) {
//             evenTotal += num
//         } else {
//             oddTotal += num
//         }
//     }
//     return evenTotal - oddTotal;
// }

// console.log(sumEvenOdd([5, 6, 99, 8, 76, 4, 68, 44]));










// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

// function evenIndex(a){
//     for (let i = 0; i < a.length; i++){
//         if(i % 2 == 0) {
//             console.log(a[i])
//         }
//     }
// }

// evenIndex([11, 'Sam', 3, 7, "car"])


// function evenIndex(a){
//     for (let i = 0; i < a.length; i+=2){
//         if(i % 2 == 0) {
//             console.log(a[i])
//         }
//     }
// }

// evenIndex([11, 'Sam', 3, 7, "car"])




// =======================================================================================================================================
// METHODS

// [5, 6, 99, 8, 76, 4, 68, 44]

// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

// function removeL(a) {
//     a.pop();
//     a.push("32")
//     console.log(a)
// }

// removeL([5, 6, 99, 8, 76, 4, 68, 44])










// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});



// function sortIt(a) {
//    // a.sort(function(a, b) {
//    //     return a-b
//    // })
//     a.sort((a.b) => a - b)
//     console.log(a);
// }


// sortIt([5, 6, 99, 8, 76, 4, 68, 44])





// ========================================================== ====================================================
// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.


let evangadiClass = {
lengthOfCourse: "1 Month",
website: "https://www.evangadi.com/",
isChallenging: false,
topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
students: [
{
name: "Abebe",
age: 34,
sex: "M"
},
{
name: "Kebede",
age: 44,
sex: "M"
},
{
name: "Almaz",
age: 27,
sex: "F"
},
{
name: "Challa",
age: 22,
sex: "M"
},
{
name: "Chaltu",
age: 19,
sex: "F"
}
]
}


// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change

// evangadiClass.lengthOfCourse = "5 Month"
// console.log(evangadiClass);








// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method

// evangadiClass.topicsCovered.push("Bootstrap")
// console.log(evangadiClass);





// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console





// function averageAge(a) {
//     let total = 0;
//     for (const stud of a.students) {
//         total += stud.age
//     }

//     const average = total/a.students.length;
//     console.log(average)
// }


// averageAge(evangadiClass)




// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

// function malePercent(a) {
//     let totMale = 0
//     for (const male of a.students) {
        
//         if(male.sex == "M") {
//             totMale ++
//         }
//     }
    
//     let totalStud = a.students.length
//     console.log(totMale/totalStud * 100);
// }

// malePercent(evangadiClass)

// console.log(evangadiClass.age);








// Puzzles
// *******
// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.

// function number1(a, b) {
//     for (let i = a; i <= b; i ++) {
//         if (i % 3 === 0)  {
//             console.log(i + " div3");
//         } else {
//             console.log(i);
//         }
//     }
// }

// number1(5, 12)






// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".



// function multiple() {
//     for (let i=1; i<= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }



// multiple()



// Question 17: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.


function evens(a) {

    // convert no to string to loop through characters
    const numStr = a.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        // convert characters back to no to check if its odd
        if (Number(numStr[i]) % 2 !== 0) {
            console.log(0);
            return; //exit the function immediately because we found an odd digit
        } 
            
    }
    // if loop completes without returning, ALL digits are even
    console.log(1)
}


evens(3124)
evens(2426)

// The Power of return: The moment JavaScript hits a return statement, it drops everything and exits the entire function immediately. It doesn't just stop the loop; it abandons the rest of the function code entirely. Because the function terminates right there, JavaScript never reaches the console.log(1) at the bottom.