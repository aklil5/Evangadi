
==Functions and Conditional statements==
topics:
Part I
- What are functions? Why do we need them?
- How do we declare/define a function in JS?
- Functions with arguments
- Functions that return a value
- Variable scoping
- Arrow functions
- Understanding statements: conditional statements
- If statements
- If … else Statements
- Switch statements

Part II
- Algorithm explained with example (addition function)
- Algorithm explained with example (the soccer points function)
- Algorithm explained with example (the area of a triangle function)
- Algorithm explained with example (the minute to second converter function)

==Part I==
# Functions/Methods
- **The person who is going to master writing a JavaScript instruction/function is the one who can chop down an instruction in to very small components and describe it.**

## What are functions?
- Methods/functions are basically the same thing with some minor differences.
- **They are a set of statements that performs a task or calculates a value.**

- The difference is, methods are defined with in objects. (We will cover what Objects are later)

- You can describe functions as words (specifically verbs) are for the English language.
- If I say [RUN] in english, it is basically a set of instructions grouped together.
	- The word run can be broken down into smaller tasks.
		- Stand on your right leg
		- Lift your left leg
		- Put it in front of your right leg
		- Stand on your left leg
		- Lift your right leg
		- Put it infront of your left leg
		- Do it faster than the speed of walking

## Why do we need functions?
- This is mainly to avoid writing the same set of instructions again and again, every time we want the same kind of task done.

- Instead, we write the instruction once and give that set of instructions a name.
- This set of instructions with a name is called a function.
- The next time we want to to perform the same kind of task, we just call the name of the function and use it
- Some functions take inputs to successfully perform their task. The input we give to our function is called "Argument".
- We have the same thing in the English language too.
	- For Example, if I say point, it might not be specific enough.

---
Function
- declaration
- expression
- arrow function

## How to ==declare/define== a function in JavaScript
- Declaring a function uses the [keyword] "**function**".
	- Just like we used the keyword "var" to declare a variable.

- Then we need to [provide the name of the function].
	- The name can be whatever you choose it to be
	- We cannot have two functions with the same name
 
- [Use parenthesis] and tell if the function needs an argument to perform its task.
	- Eg. A function that does addition (Needs the numbers to be added)
	- If it does, we provide "parameters" with in brackets to the function.
	- If it doesn't 
		- We just leave the brackets empty

- Then we put all the statements of what we want the [function] to do with in the side curly braces.

- Ex:
```
function myFunctionName () {
	alert("Display something")
}
```
- To use this, we just call the name `myFunctionName();` [Invoking or calling the function]

---
## Function declaration vs function expression
### 1. Function declaration
-  Example:
```js
add() 

function add() {
	...
	...
	...
} 
```

==Function Hoisting==
- **a JavaScript mechanism where entire function declarations are moved to the top of their scope** (like a function or global scope) before code execution, allowing them to be called before their physical placement in the code.

**If you use Function declaration**, [it will work if we call the function before defining it.

### 2. Function expression
- Example:
```js
add() //NOOOOOO wont work
const add = function() {
	...
}
add() //YASS
```
**Here, the function won't work if we call it before the expression.**
[RECOMMENDED ]



---
## Functions with arguments
- What if we want our function to display whatever we give it?
	- Then we rewrite our function in a way that it takes arguments.

### What are arguments?
- Argument is the actual value of this variable that gets passed to function.
	- are **Inputs used when invoking a function.**

### What are parameters?
- are like **place holders used when declaring a function.**

### Parameter vs argument of a function
Example:
```js
function addTwoNumbers(num1, num2) {
	console.log(num1 + num2)
}
addTwoNumbers(12,8)
```
Here:
- "num1" and "num2" are parameters
- "12" and "8" are arguments.

NOTE: the order of arguments in a function call must match the order of parameters in the function definition.
- Incorrect order will lead to unexpected results.

```js
function intro(name, age, occupation){
	console.log(`${name} is a ${age} years old ${occupation})
}

intro("Aklile", 21, "developer")
```
this is called ==Template Literal== **strings that can contain embedded expressions**


---
## Functions that return a value
```js
function adder(a, b){
	var c;
	c = a + b;
	return c;
}

instead of 
function average(a, b) {
	var av;
	av = (a+b)/2;
	return av
}
You Can
function average(a,b){
	var av;
	av = adder(a,b)/2; //usingabove function
	return av;
}
var k = average(90,85);
console.log(k);
```

if we `console.log` a function that doesnt return a value, we get:
	`undefined`

- [dont add anything after the] **RETURN STATEMENT;*.

---
## Variable scoping
- Variable with in a function are only recognized in that function.
- Global variables are recognized by everyone.

Ex:
```js
function myAdditionCalculator (a, b) {
	var c;
	c = a +b;
	return c;
}
```
If you call c outside of the function, it throws an error. Because c isn't known outside of the function.

### Scopes
**1. Function scope** - available only within current function.
**2. Global scope** - available throughout the entire program
**3. Block Scope** - available only with in that block (with loops, conditionals, [except functions])
```js
//d/ce between block scope and function scope is
	//var keyword
function myCar(){
	var x = "Toyota";
}
console.log(x)//x not defined

//VS

{
	var y = "Red"
}
console.log(y) //Red
//VAR isnot bound by ANY BLOCK except **Function**
```


**Functional Scope**
- var, let and  const
 **Block scope**
- let, 
-  const

## Var, let & const
- let and const are introduced in 2016 (ES6)
- var and let are very similar. The main different relies in scoping.
	- var creates **function scope variable
		- if declared in function - available in function
	- let & const create **block scope variable**
		- block is 
		- `{
		- }`
```js
function scope(){
let a = 5;
{}
{}

}
// a var is available for the whole function since its at the top
```
- (This is how most other programming languages scope variables)

- It is recommended to use let instead of var.
	- let prevents mistakes of trying to re-declare on already declared variable

**Avoid this**
```js
function add(a, b){
w = 15
}
console.log(w) //15
//since it will have a global scope, we should always use keywords let, const.
```
- const, is similar to let, but it is a constant. Meaning, you can't reassign the value
	- const does not allow reassignment
	- const variables need to be declared using an initialize, or it will generate an error.

---
## Arrow functions - Simplified function writing
- we just eliminate the use of the word **"function"** and add an arrow after the brackets.
```js
var addFun = () => {}
```


- **Curly brackets and return  aren't required** if only one expression is present.
```
const anotherFunction = () => "Hi there";
```
	INSTEAD OF
```js
const anotherFunction = () => {
	return "Hi there";
}
```


- If there's only one argument, then the **parenthesis are not required** either;
```
let square = x => x * x;
```

### Anonymouns Function
- function without a name
```js
var myFunction = function(){
}
```

### 3 ways of writing a simple function
```js
function firstWay(a) {
	return "Hi there";
}
let secondWay = function(a) {
	return "Hi there";
}
let thirdWay = (a) => {
	return "Hi there";
}

let another way = a => return "Hi there";

```

---
# Understanding statements
## What are Statements?
- A **statement** is a [command that the programmer gives to the computer].
- The entire goal of learning a programming language is to be able to communicate with computers and use their computational power to solve problems of the world.

## Conditional Statement
- is a **set of rules performed if a certain condition is met.**

There are three parts of conditional statements
1. **The Evaluation**
	- This is where you analyze values in your script to determine whether or not they match expected results
Eg. 
```
var a = 82;
(a <= 55);
```
2. **The Decision**
	- using the results of the evaluation, you decide which path to take
	- This is always a **True or False value** in conditional statements
Eg. Evaluation
```js
var a = 82;
(a <= 55);
Decision: True
```
3. **The Statement**
	- What to do when conditions are fulfilled or not fulfilled.
Eg.
```js
console.log("RAISE YOUR HAND!");
console.log("You failed");
```
## 1. If Statement
- Defn
	- an if statement is a programming conditional statement that, if proved TRUE, performs a function or displays information. HOW?
- Syntax:
	- start by using key word "if"
	- put the conditions in ()
	- put the code blcok with in a brace {}

```js
var pass = 50;
var score = 76;
if (score >= pass) console.log("Hey you passed");

// if the statement is a single line, you can leave out {}
```

## 2. If...... else Statement
- This statement checks a condition. If it returns true, then it executes the block with in the if statement. If it returns false then it executes the code with in the else block.

### Ternary Operator ? :
- Alternative  for if....else
- Syntax:
	- `condition ? returnIfTrue : returnIfFalse`
```js
let a = 10;
let b = 20;
a > b ? console.log("YAS") : console.log("NAURR")
//NAURR
```


## 3. Switch Statement
- The switch statement starts with a variable called the [switch value]
- Each case indicates the possible value and the code it runs if the given value matches

- It takes an input (not a condition)
	- `switch (var)`
- [case] is expected input
- [default] - for any type

- Ex:
```js
var greetings;
var timeOfDay;
timeOfDay = "afternoon";

switch(timeOfDay) {
	case "morning":
		greetings = "Good morning";
		break;
		
	case "afternoon":
		greetings = "Good afternoon";
		break;
		
	default:
		grettings = "Hi there";
		break;
}
//Good afternoon
```


```js
let score = 80;
switch (true) {
	case score > 90:
		console.log("A");
		break;
	case score > 70:
		console.log("B");
		break;
	default:
		console.log("F");
}
```

==========================================================
==Part II
Algorithmic Thinking P1==

Prograrmmer = able to give instructions to computer

Defn: Step-by-step sets of instructions, to complete a task

## Steps to follow solving algorithmic problem
---
1. **Understand the Problem**
2. **Solve it on paper**
	- Use example cases to make sure that you can actually solve the problem on paper
	- NOTE: The most difficult part of new comers is not actually solving the problem. The difficulty is in understanding & identifying the smallest steps the brain takes to solve the problem. (Our brain is sometimes too fast for us to comprehend)
3. **Craft a general step that can be followed to solve any kind of similar problem**
	- This is where you would consider scenarios that might not have been covered in the examples you solve above and tweak the solution accordingly
4. **Write the  pseudo code**
	- Identify the smallest steps to follow and pick what JavaScript functionality you need to use to cover that step
5. **Translate to JavaScript**
	- Follow the pseudo code and write the solution
		- Use all JavaScript tools your know
			- Variable
			- Operators
			- function
			- Conditional statements
			- Loops
			- Arrays
			- All the JS method you know
6. **Test/debug**
7. **Write useful comments in your code**
8. **Practice, practice, practice**



Very useful Resource
https://edabit.com/ for sample problems and practice solving them on your own computer.

- use Grepper extension for better results in google

---
# Algorithm explained with example
## 1. Addition Function
- typeof(a) - doesn't return boolean

```Pseudo code
- Define a function that takes two arguments
	- check if the given argts are numbers
- add the two numbers
- save the result on a variable
- return the result
```

```js
function add(a, b) {
	if (typeof a != "number" || typeof b != "number") {
		return "please enter numbers only";
	}
	var c = a+b;
	return c;
}
```

OR
- if you want to accept **numerical string**
	- isNaN - returns boolean
```js
function add(a, b) {
	if (isNaN(a) || isNaN(b)) {
		return "please enter numbers only";
	} 
	var c = parseFloat(a) + parseFloat(b);
	return c;
}
```














## 1. addition function
==why isNaN() is preferred than typeof()==
since js accepts inputs as strings, even if they are numbers, we need to check if they really are numbers in the string using isNaN

wede kutr convertale yelo string kehone -  wede wede kutr  ykeyratal

```js
console.log(isNaN(9)) //false
console.log(isNaN("9")) //false
console.log(isNaN("9a")) //true
  

console.log(typeof(9)) //number
console.log(typeof("9")) //string
console.log(typeof("9a")) //string
```

```js
function add(a, b){
    if (typeof a != "number" || typeof b != "number"){
        return "i can only add numbers, please pro"
    }
    return a + b;
}

console.log(add(5, 7)) //12
console.log(add(54, "91")) // i can only add numbers
console.log(add(5, "add")) // i can only add numbers

```


```js
function add(a, b){
    if (isNaN(a) || isNaN(b)){
        return "i can only add numbers, please pro"
    }
    return a + b;
}

console.log(add(5, 7)) //12
console.log(add(54, "91")) //5491
console.log(add(5, "add")) //i can only add numbers

```































## 2. The Area of a triangle function
```js
function area(b, h) {
	if (isNaN(b) || isNaN(h)) {
		return "please enter number only";
	} else if (b <= 0 || h <= 0) {
		return "please enter positive numbers";
	} else {
		var c = (b *h) /  2;
		return c
	}
}

```


## 3. The soccer points function
wins, draws and losses
```js
function footballPoints(a, b, c) {
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return "please enter number only";
	} else {
		let winPoints = a * 3;
		let drawPoints = parseInt(b);
		
		let total = winPoints + drawPoints;
		return total;
	}
}
```

console.log(footballPoints("6", "9", 11));
"6" * 3 = 18 
	so no need to change to integer using `parseInt(a)` when we are going to do multiplication

## 4. The minute to second converter function
```pseudocode
- Declare a function called minuteToSecondConverter
- the function takes one argument
- check if the provided minute is a valid number greater than 0
  if the user enters a string return "please enter number only"
  if yes, multiply the number with 60 and return the product
```

```js
function minuteToSecondConverter(min) {
	if (tpeof(min) != "number") {
		return "please enter number only";
	} else if (min < 0) {
		return "enter positive number only";
	} else {
		let second = a * 60;
		return second;
	}
}
```
html
![[Pasted image 20260526094217.png]]

css below the above function
![[Pasted image 20260526094137.png]]

