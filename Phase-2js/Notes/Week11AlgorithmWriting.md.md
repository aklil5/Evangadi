Topics:
- Algorithm Writing
	- Hidden word in a crowd function
	- the nested array function
	- the magic array function
	- the sort function

==practice on edabit==

---	
# Algorithm Writing
- **Step-by-step sets of instructions, to complete a task.**

1. Understand the problem
	- **What exactly is asked?**
	- **WHAT IF???**
		- if the input is -ve, string....
2. Solve it on paper
	- use example cases to make sure that you can actually solve the problem on paper.
	- NOTE: THE DIFFICULTY IS [UNDERSTANDING AND IDENTIFYING THE SMALLEST STEPS THE BRAIN TAKES TO SOLVE THE PROBLEM] (our brain is sometimes too fast for us to comprehend)
3. Craft a general step that can be followed to solve any kind of similar problem
4. Write the pseudo code
	- identify the smallest steps to follow and pick what js functionality you need to use to cover that step
5. Translate to Js
6. Test

7. write useful comments in your code
8. Practice, practice, practice

---
## Hidden word in a crowd function

```js
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.


// Examples
// detectWord("UcUNFYGaFYFYGtNUH")  "cat"


```

```js
// PSEUDO CODE
// - declare a function that accepts Argt
// declare a new word var
// looping through the letters, if the letter is equal to when changed to lower case, CONCATENATE IT to new var

  
function detectWord(a) {
    let newWord = ""
    for (let i =0; i< a.length; i++) {
        if (a[i] === a[i].toLowerCase()) {
            newWord += a[i]
        }
    }
    console.log(newWord);
}
  
detectWord("bEEFGBuFBRrHgUHlNFYaYr") // "burglar"
```



```js
// OR another way
// to convert it to array
// filter the lowercase letters
// join them to string


function findHiddenWord(a) {
     let stringArrays = a.split("");
     let smallLetters = stringArrays.filter((singleLetter) => singleLetter === singleLetter.toLowerCase());
     
     smallLetters = smallLetters.join("");

     return smallLetters;
 }

// console.log(usingArrayFilter("YFemHUFBBezFBYzFBYLleGBYEFGBMENTment"))
// // "embezzlement"
```


---

## The nested array function
```
// Question 2 (Edabit)Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
//       arr1's min is greater than arr2's min.
//      arr1's max is less than arr2's max
```

```js
function canNest(arr1, arr2) {
	let sortedArr1 = arr1.sort((a, b) => a - b)
	let sortedArr2 = arr2.sort((a, b) => a - b)
	
	let max1 = sotedArr1[length -1 ]
	let max2 = sortedArr2[length - 1]
	let min1 = sortedArr1[0]
	let min2 = sortedArr2[0]
	
	return min1 > min 2 && max1 < max2
	// will return true or false without an if statement
}

// console.log(canNest([3, 1], [4, 0])) // true

// canNest([9, 9, 8], [8, 9]) // false
```


```
or you can use spread operation **(...a)**, then you can use
	Math.max(...arr1)
	Math.min(...arr2)
```








---

## The magic array function

```
// Magic array

// An array is defined to be a Magic array if the sum of the primes in the array is equal to the first element of the array. If there are no primes in the array, the first element must be 0.

// So {21, 3, 7, 9, 11, 4, 6} is a Magic array because 3, 7, 11 are the primes in the array and they sum to 21 which is the first element of the array. {13, 4, 4, 4, 4} is also a Magic array because the sum of the primes is 13 which is also the first element. Other Magic arrays are {10, 5, 5}, {0, 6, 8, 20} and {3}. {8, 5, -5, 5, 3} is not a Magic array because the sum of the primes is 5+5+3 = 13. Note that -5 is not a prime because prime numbers are positive.
```


```
FIRST
- CHECK IF PRIME OR NOT WITH A FUNCTION
- isPrime function - if less than 1 - false
  - if 2 true
  - if divisible by 2 - false
  - for loop starting from 3 to sqrt(num) - divisible by i - false
  - return true
 
```


 

```js

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 == 0) return false;

    for (let i = 3; i<= Math.sqrt(num); i+=2) {
        if (num % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(15));
// console.log(isPrime(7));


function isMagic(a) {
    let sum = 0;
    // Start i at 1 so we don't accidentally include the target number a[0] in the sum
    for (let i=1; i<a.length; i++) {
        let num = a[i];
        if (isPrime(num)) {
            sum = sum + num
        }
    }

    if (sum === a[0]) {
        return "Magic"
    } else {
        return "Not Magic"
    }
}
console.log(isMagic([21, 3, 7, 9, 11, 4, 6])) //is a Magic array 
console.log(isMagic([13, 4, 4, 4, 4])) //not
```









 
---

##  The sort function
```
define a function that serves the same purpose as the sort() method
```

```js
function sortNumbers(a){
    let isSorted = true;
    while (isSorted) {
        isSorted = false;
        for (let i=0; i<a.length - 1; i++) {
        // we want to stop at length - 2
            if (a[i] > a[i+1]) {
                isSorted = true;
                let temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
            }
        }
    }

    return a;
}



console.log(sortNumbers(([21, 3, 7, 9, 11, 4, 6])))  
console.log(sortNumbers(([13, 4, 4, 4, 4])))

```



---

