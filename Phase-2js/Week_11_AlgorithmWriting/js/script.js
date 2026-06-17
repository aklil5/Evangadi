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



// FIRST
// - CHECK IF PRIME OR NOT WITH A FUNCTION
// - isPrime function - if less than 1 - false
//   - if 2 true
//   - if divisible by 2 - false
//   - for loop starting from 3 to sqrt(num) - divisible by i - false
//   - return true

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 == 0) return false;

//     for (let i = 3; i<= Math.sqrt(num); i+=2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// // console.log(isPrime(15));
// // console.log(isPrime(7));


// function isMagic(a) {
//     let sum = 0;
//     // Start i at 1 so we don't accidentally include the target number a[0] in the sum
//     for (let i=1; i<a.length; i++) {
//         let num = a[i];
//         if (isPrime(num)) {
//             sum = sum + num
//         }
//     }

//     if (sum === a[0]) {
//         return "Magic"
//     } else {
//         return "Not Magic"
//     }
// }
// console.log(isMagic([21, 3, 7, 9, 11, 4, 6])) //is a Magic array 
// console.log(isMagic([13, 4, 4, 4, 4])) //not






// ===================================================
// ===================================================


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



// FIXXXXXXXXXXXXX

// function isMagic(a) {
//     let sumPrime = 0;
    
//     // FIX 1: Start at index 1 to skip the target total, and use a.length
//     for (let i = 1; i < a.length; i++) {
//         let num = a[i];
        
//         // FIX 2: Skip invalid numbers instead of returning false
//         if (num <= 1) continue; 
//         if (num === 2 || num === 3) {
//             sumPrime += num;
//             continue;
//         }
//         if (num % 2 === 0 || num % 3 === 0) continue;
        
//         // FIX 3: Assume it is prime until proven otherwise
//         let isPrime = true;
//         // Optimization: Checking up to the square root is much faster than num / 2
//         let limit = Math.sqrt(num); 
        
//         for (let j = 5; j <= limit; j += 6) {
//             if (num % j === 0 || num % (j + 2) === 0) {
//                 isPrime = false;
//                 break; // Found a factor! Stop checking.
//             }
//         }
        
//         // Only add to the sum if it survived the whole check
//         if (isPrime) {
//             sumPrime += num;
//         }
//     }
    
//     // FIX 4: Clean comparison block
//     if (sumPrime === a[0]) {  
//         console.log("Magic");
//     } else {
//         console.log("Not Magic");
//     }
// }

// isMagic([21, 3, 7, 9, 11, 4, 6]); // Output: Magic
// isMagic([13, 4, 4, 4, 4]);        // Output: Not Magic





// BRUKEs approach

// function isMagic(a){
// 	let isPrime = true;
// 	let sum = 0;
// 	for (i=0; i< a.length - 1; i++) {
// 		let num = a[i]
// 		if (num < 2) isPrime = false;
// 		for (j=2; j < num/2 + 1; j ++) {
// 			if (num % j == 0) isPrime = false;
// 		}
// 		if (isPrime) {
// 			sum = sum + num
// 		}
// 	}
// 	if (sum === a[0]) {
// 		return "Magic Array"
// 	} else {
// 		return "Not Magic"
// 	}
	
// }

// console.log(isMagic([21, 3, 7, 9, 11, 4, 6])) //is a Magic array

// console.log(isMagic([13, 4, 4, 4, 4])) //not



















// ======================================================
// ===================================================

// 44444444444
// Sort function 

// PSEUDO CODE
// Declre a function - sorttt that accepts array of argt
// going through the array , check if the first element is greater than the second - if so change their position
//  with temporary value = first element
// first element = second element
// second element = temporary element 


function sorttt(a){
    let checker = true;
    while (checker) {
        checker = false;
        for (let i=0; i<a.length - 1; i++) {
        // we want to stop at length - 2
            if (a[i] > a[i+1]) {
                checker = true;
                let temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
            }
        }
    }

    return a;
}



console.log(sorttt(([21, 3, 7, 9, 11, 4, 6])))  
console.log(sorttt(([13, 4, 4, 4, 4])))
