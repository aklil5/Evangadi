1. **Regex**
	1. What are regex?
	2. How do we Use RegEx?
	3. RegEx in Js
	4. Using the RegEx object and the methods under it
2. **Asynch JS** - callback, promise and async-await
	1. Introduction: what is asynchronous JavaScript?
	2. Callback functions
	3. Promise (creating a promise and states of a promise)
	4. Promise (consuming a promise)
	5. Promise (catching error)
	6. Promise (async-await)


---
# 1. Regex
## 1.1. What are regex?
Defn
- a sequence of symbols and characters expressing a string or pattern to be searched from within a longer piece of text.

- Regex defines a search pattern for strings. The search pattern can be anything from a simple character, a fixed string of a complex expression containing special characters describing the pattern.


### Why do we need Regex?
- having the ability to search through text, validate text, and replace text using an advanced set of rules is exactly what Regex is for






---
## 1.2 How do we Use RegEx?
- we need three things
	1. the text we do the search on
	2. the pattern we use to search
	3. a way to do the matching/searching

### Common Symbols
- . 
	- matches any character
- ^regex 
	- Finds regex that must match at the beginning of the line
- regex$
	- regex that must match at the end of the line
- [abc]
	- set definition, can match the letter a or b or c
- [^abc]
	- when a caret appears as the first character inside a square bracket, it negates the pattern

### Pre defined meta characters
- \d
	- any digit, short for [0-9]
- \D
	- a non-digit, short for [\^0-9]
- 's
	- a whitespace character'

### Quantifiers
- *
	- occurs zero or more times, short for {0,}
	- `X*` finds no or several better ==x0b ???
	- `.*` finds any character sequence
- +
	- occurs one or more times, short for {1,}
	- `X+` finds one or several letter x
- ?
	- Occurs no or one times, short for {0,1}
	- `X?` finds no or exactly one letter X
- {X}
	- occurs X number of times, {} describes the order of the preceding liberal
	- `\d{3}` - searches for three digits,
	- `.{10}` for any character sequence of length 10
- {X, Y}
	- occurs between X and Y times,
	- `\d{1, 4}` means \d must occur at least once and a maximum of four



### Flags
- Flags in RegEx are ways of providing further info on how to do the searching.
- There are 6 RegEx flags in JS. But the most common ones are these two
	- **i**
		- with this flag the search is case-insensitive:
		- no difference between A and a
	- **g**
		- with this flag the search looks for all matches, without it - only the first match is returned.
- 
	- The default is usually to do case sensitive global matching








---
## 1.3 RegEx in Js
- In js, regular expressions are objects (TegExp). Just like Arrays.
- There are methods inside the object that we can use to help us with the matching. The exec() and test() methods are the main ones.
- To start using RegEx in Js, we need ot create the expression object first, we can use the literal or the constructor method to create the object.

**Syntax:**
	`let var = /pattern/modifiers;`

**Ex**
- let re = /ab+c/i; //literal notation
- let re = new RegExp('ab+x', 'i') //object notation
	- not commonly used

- The "**pattern**" is the sequence we use to filter
	- its composed of simple characters and/or a combination of simple and special characters.
	- When you search for data in a text, you can use this search pattern to describe what you are searching for.

- The **"modifiers"** are there to describe if the search is global or case-sensitive.

**Ex**
- `var someVar = /abebe/i;`
	- this is a pattern that can be used to match for the word "abebe"


## Using String Methods with RegEx
- Regular expressions are often used with string methods. The common String methods we use with regex are **match(), search() and replace() methods**

### 1. Using String search()
- The **search()** method searches a string for a specified value, and [returns the position of the match].

```js
// String Search
var str = "Abebe beso bela!"
var n = str.search("beso")
console.log(n);
// 6


// String Search with RegEx
var str = "Abebe beso bela!"
var n = str.search(/Beso/i)
console.log(n);
```

### 2. Using String replace()
- The **replace()** method takes two arguments and returns a new string with some or all matches of a pattern replaced by a replacement.

```js
var str = "Abebe beso bela!"
var n = str.replace("bela", "teta")
// console.log(n);

n = str.replace(/Bela/i, "teta")
let m = str.replace(/b/g, "B")
console.log(n);
console.log(m);

// OUTPUT
// Abebe beso teta!
// ABeBe Beso Bela!
```



### 3. Using String match()
- The match method takes regular expression as an argument and [returns an Array] whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found

**Eg**
```js
var str = "Abebe beso bela!"
var n = str.match(/bela/i)
var m = str.match(/be/i);
var o = str.match(/be/gi)

console.log(m);
console.log(n);
console.log(o);

// OUTPUT
// [ 'be', index: 1, input: 'Abebe beso bela!', groups: undefined ]
// [ 'bela', index: 11, input: 'Abebe beso bela!', groups: undefined ]
// [ 'be', 'be', 'be', 'be' ]
```




---
## 1.4 Using the RegEx object and the methods under it
- In js, the RegExp object is a regular expression object with predefined properties and methods.

### Using test()
- The test() method takes a **string as an argument, searches for a pattern and returns true or false depending on the result**

```js
let str = "abebe beso bela"
let patt = /bela/i
let result = patt.test(str)
console.log(result);             // true
```



### Using exec()
- The exec() method takes a string as an argument, searches for a pattern, and **returns the found text as an object**. If no match is found, it returns an empty(null) object.

**Eg**
```js
let str = "abebe beso bela"
let patt = /bella/i

let result = patt.exec(str)
console.log(result);
// OUTPUT [ 'bela', index: 11, input: 'abebe beso bela', groups: undefined ]
```








---

---
# 2. Asynch JS - callback, promise and async-await
## 2.1 what is Asynchronous JS
- JavaScript is a single-treaded programming language. 
	- Meaning, JS engine can only process one statement at a time in a single thread.
- By default, the js engine runs codes synchronously. which means, it waits to finish one statement before executing the next one. This nature of JS can sometimes be the cause of unnecessary waiting/delay and hence slowness of the Application.
- Asynchronous js is a means of unplugging one or more statements from the main Synchronous step by step execution of the program and scheduling it to be processed in a later time.

- When you say a script is running Asynchronously, you are basically saying that script is running independent of the main script.


## How do Browsers handle Asynchronous code?
- Up until very recently JS didn't have a native way of handling asynchronous executions. Instead, browsers have offered a number of functions that allow codes to be executed asynchronously.
	- The two most commonly used functions are the `setTimeout()` and `setInterval()` function.
- The use of the traditional `setTimeout() and setInterval()` methods let us also run some of the codes Asynchronously.
- The key component to keep both the synchronous and asynchronous pieces to work together is what we call the "**Event Loop**".

- What happens when JS gets to a line with an Asynchronous code is that, it schedules it for later time and jumps to the next statement that it can execute.
- The Asynchronous code gets to be processed by the external system at the same time. Once the process id done, a report is sent to the "[Call back queue]". 

- One simple thing you can notice here is that, all Asynchronous codes run after the Synchronous ones are executed.


### Three ways to implement Asynchronous code 
- Callbacks, 
- Promises, and 
- Async-Await)





---
## 2.2 Callback functions

Definition
- A callback is **a function that is to be execution after another function has finished executing** - hence the name "call back"

- In JS, functions can take functions as arguments, and can be returned by other functions. Any function that is passed as an argument is called a callback function.

Eg. using callback function with setTimeOut to create Asynchronous code
```js
let abebe = () => {
	console.log("Almaz")}


console.log("Abebe")
console.log("Kebede")
setTimeout(abebe, 0);
console.log("Challa")


//OUTPUT
	//Abebe
	//Kebede
	//Challa
	//Almaz
```




### Callback hell
- as we can call functions inside another funciton to makesure for the caller to wait for the required function to finish its job first, we can keep nesting functions one inside the other indefinitely.
- These tends to create hard to understand code for the developer. This mess that gets created due to the nesting of functions is called callback hell. 




---
## 2.3 Promise (creating a promise and states of a promise)

### Definition:
- A promise is an **object that may produce a single value some time in the future**: [either a resolved value], or a [reason that it's not resolved] (eg. a network error occured)

### **Understanding Promise**
- Promises work in a similar way a real life promise works. For example, if you lend some money to your friend and he promises to pay it back soon, there are three possible things that could happen

1. He/she pays back (Promise is fulfilled)
2. He/she stops answering your call (Promise failed)
3. He/she takes time before actually paying it back (payment pending)

- The JS Promises also work in a similar way. 
- The first thing we need to do to use Promises in JS is actually to ==create the Promise obejct.==
- We create them in a similar way we create any other object using the **"new"** keyword.


### Creating a Promise
- The Promise constructor takes a single function as an argument. This function is called the "**Executor**" function. -> the one that contains the code that actually produce the result at the end.

**Syntax**
```js
let promise = new Promise(function(resolve, reject) {
	// write your executor code in here
})
```

- The Executor function takes two callback functions names **"resolve** and **"reject"**. You don't define thse 2 functions since they are already included inside JS and provided by it.

- The Promise constructor [returns an object with some unique properties].
	- If you console.log this new object and try to observe what it looks like:

- You can notice there are two properties names "**PromiseState**" and **"PromiseResult"**.
	- [PromiseState] property holds the current status of the Promise and
	- [PromiseResult] property holds the result when Promise is fulfilled.

### States of Promise
- A promise is in one of these states:
	- pending: initial state, neither fulfilled nor rejected
	- fulfilled: operation was completed successfully.
	- rejected: operation failed 


- The **state property** of the Promise changes based on the function thats called inside of the executor function.
	- If the "**resolve**" function is called, the ["pending"] state changes to "[fulfilled]."
	- when **"reject"** function is called, the "[pending]" state changed to "[rejected]"

- The **result Property** also changes up on calling the resolve or reject method.
	- If the "**resolve**" function is called, the result changes to the value that is passed by the [resolve] function.
	- When the "**reject**" function is called, the result changes to the error passed by the reject function.


**Note**: the executor should call only one [resolve] or one [reject]. Any state change is final. All further calls of resolve and reject are ignored.
```js
let promise = new Promise(function(resolve, reject){
	if(true){
		resolve("Abebe")
	}
	if (1 == 1) {
		reject("Weyneee")
	}
})
console.log(promise;)

// OUTPUT is "Abebe"
```


- it cant e both resolve or reject, only the first one of the two
- so mejemeria yagegnewn kal (promise) new mimelsew








---
## 2.4 Promise (consuming a promise)
- The main reason we use Promise is to actually get notified when Asynchronous code finishes running and ready to pass the returned result. There are a couple of Methods that we can use to mediate this process for us.

**then()**
- then() is the main method that we use to receive results or error from the Promise to use it in our function. The then() takes two function as argument.
	- The first - function that receives the result if it exists
	- the second- function that receives the error if it exists

```js
promise.then(
	function(result) { } //handles successful result
	function(error) { } //handle an error
)
```


**The promise object has methods we can see on the console such as:**
- then, catch, finally, constructor 




---
## 2.5 Promise (catching error)
**catch()**
- If we're interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use ,catch (errorHandlingFunction), which is exactly the same.












---
## 2.6 Promise (async-await)
**Defn**
- The "**Async**" function and the **"Await"** keywords simplify the way we use Promises. In other words, Async-Await is just a syntax added on JS to make asynchronous code writing easier.


### **Async functions**
- The word "async" before function means one simple thing: [the function always returns a promise]

**Eg:**
```js
async function someFunction() {
	return "Abebe";
}
```
- This function returns a resolved promise with the result of **"Abebe".**
- That means, we can use the returned promise just like we did earlier.

**Ex:**
`someFunciton().then(alert);`


### Await
- They keyword **"await"** is just a syntax that makes JS wait until that promise settles and returns its result.


**Note:** You can't use await in regular functions.
	Ex. this wouldn't work
```js
function someFunction(){
	let Promise = Promise.resolve(1);
	let result = await promise; //syntax error
}
```



checkout [https://codingame.com]
