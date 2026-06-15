// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Examples
// detectWord("UcUNFYGaFYFYGtNUH")  "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") "burglar"
// detectWord("YFemHUFBBezFBYzFBYLleGBYEFGBMENTment") "embezzlement"



// PSEUDO CODE
// - declare a function that accepts Argt 
// declare a new word var
// looping through the letters, if the letter is equal to when changed to lower case, CONCATENATE IT to new var


// function detectWord(a) {
//     let newWord = ""
//     for (let i =0; i< a.length; i++) {
//         if (a[i] === a[i].toLowerCase()) {
//             newWord += a[i]
//         }
//     }
//     console.log(newWord);
// }



// detectWord("bEEFGBuFBRrHgUHlNFYaYr") // "burglar"



// OR another way
// to convert it to array
// filter the lowercase letters
// join them to string





// function findHiddenWord(a) {
//     let stringArrays = a.split("");

//     let smallLetters = stringArrays.filter((singleLetter) => singleLetter === singleLetter.toLowerCase());

//     smallLetters = smallLetters.join("");

//     return smallLetters;
// }

// console.log(usingArrayFilter("YFemHUFBBezFBYzFBYLleGBYEFGBMENTment")) 
// // "embezzlement"

// console.log(usingArrayFilter("UcUNFYGaFYFYGtNUH"))  






// Question 2 (Edabit)Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
//       arr1's min is greater than arr2's min.
//      arr1's max is less than arr2's max
// 


// Examples
// canNest([1, 2, 3, 4], [0, 6]) //true
// canNest([3, 1], [4, 0]) // true
// canNest([9, 9, 8], [8, 9]) // false
// canNest([1, 2, 3, 4], [2, 3]) // false


// PSEUDO CODE
// define a function "canNest" that accepts 2 arrays
// sort it using filter
    // min1 is 1st element of arr1
    // max1 the last element of arr1 and same for arr2
// if arr1(min) > arr2(min) and
    // arr1(max) < arr2(max) 
// return true

// function canNest(arr1, arr2) {
//     if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
//         return "Both values need to be Array"
//     }
//     let arr1Sorted = arr1.sort((a,b) => a - b)
//     let arr2Sorted = arr2.sort((a,b) => a - b)
//     let min1 = arr1Sorted[0]
//     let min2 = arr2Sorted[0]
//     let max1 = arr1Sorted[arr1Sorted.length -1]
//     let max2 = arr2Sorted[arr2Sorted.length -1]

//     return min1 > min2 && max1 < max2
//     // will return true or false without an if statement
// }

// console.log(canNest([1, 2, 3, 4], [0, 6])) //true
// console.log(canNest([3, 1], [4, 0])) // true
// canNest([9, 9, 8], [8, 9]) // false
// canNest([1, 2, 3, 4], [2, 3]) // false


// // or you can use spread operation (...a), then you can use Math.max or min

// Math.max(...arr1)














// 333333
// ================================================================
// Magic array
// An array is defined to be a Magic array if the sum of the primes in the array is equal to the first element of the array. If there are no primes in the array, the first element must be 0. 
// So {21, 3, 7, 9, 11, 4, 6} is a Magic array because 3, 7, 11 are the primes in the array and they sum to 21 which is the first element of the array. {13, 4, 4, 4, 4} is also a Magic array because the sum of the primes is 13 which is also the first element. Other Magic arrays are {10, 5, 5}, {0, 6, 8, 20} and {3}. {8, 5, -5, 5, 3} is not a Magic array because the sum of the primes is 5+5+3 = 13. Note that -5 is not a prime because prime numbers are positive.


// PSEUDO CODE
// define a function "magicArray"
// if 0, 1, -ve, or even -  not prime
// if 1st element == 0; MAGIC

// identify all primes and ADD them
// compare the sum with the 1st element
// if equal MAGIC


// function isMagic(a) {
    

//     let sumPrime = 0;
    
//     for (let i = 0; i < (a/2) + 1 ; i++) {
//         let num = a[i];
//         if (num <= 1) return false;
//         if (num <= 3) sumPrime += num;
//         if (num % 2 === 0 || num % 3 === 0) return false;
//         for (let j = 5; j < (num/2) + 1; j++){
//             if (num % j !== 0) {
//             sumPrime += num;
//             }
//         }
        
//     }
    
//     if (false && a[0] == 0) {
//         console.log("Magic");
//     } else if (sumPrime === a[0]) {  
//         console.log("Magic");
//     } else {
//         console.log("Not Magic");
//     }
// }

// isMagic([21, 3, 7, 9, 11, 4, 6]) //is a Magic array 
// isMagic([13, 4, 4, 4, 4]) //not







// 44444444444
// Sort function 

// PSEUDO CODE
// Declre a function - sorttt that accepts array of argt
// have smallvalue vr declared
// going through the array , check if tht element is is the smllest with nested loop 


function sorttt(a){
    let smallvar = 0;
    for (let i = 0; i < a.length; i++) {
        let firstVal = a[i];
        for (let j=1; j < a.length; j++) {
            let secondVal = [j]
            if (firstVal < secondVal) {
                
            }
        }
    }
}



([21, 3, 7, 9, 11, 4, 6])  
([13, 4, 4, 4, 4]) 
