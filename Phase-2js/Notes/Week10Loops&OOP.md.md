Topics:
- Decisions & loops
	- for loop
	- while loop
	- Example - Add up until a number

- Intro to object oriented programming
	- The object oriented data model
	- Object oriented programming in Js
	- JavaScript object constructors
	- Mostly used built-in JS object 
		- String object
		- array object
		- math object

---
# Decisions & loops
- Loops offer a quick and easy way to do something repeatedly.
- Loops are used for iterating over a collection of items or executing a set of instructions multiple times.
- If a condition evaluates true, the loop's statement is executed.
- When the condition evaluates to false, the loop stops.

Types of Loops in JS
- for
- for/in
	- for objects
- for/of
	- for array
- while
- do/while

---
## for loop
- most commonly used loop
- we use the for loop when we want to execute the code for specified amount of time.

```js
for (let i = 0; i < 5; i ++) {
	console.log("i = " + i);   
}
```
### for loop syntax
```
for (initialization; condition; post/final-expression or update) {
	// statements (code block to be executed)
}
```

- Notice we have three parts in our condition that are separated by [";" ]
	- initialization
		- executed (one time) before the execution of the code block.
		- used to initialize a variable
	- condition
		- defines the condition for executing the code block
		- The code inside the for loop is executed as long as this condition is true.
	- post-final expression
		- executed (every time) after the code block has been executed
		- updates the variable we initialized.

==DONT FORGET TO USE LET IN INITIALIZATION==
```js
for (i=1; i<=10; i++)

CREATES GLOBAL VAR WHICH CAN CAUSE SNEAKY BUGS LATER
```

---

### **To see the step by step process:**
	- [Inspect => sources] -> select the file
![[Pasted image 20251005205153.png]]

- **Select a break point(number**) -> where you want it to stop  -> click on the line you want it to stop
- Then **refresh it**
- Select then one on top right, after the |> (**clockwise arrow) and u can see the step by step execution** of the code below it


- [go back and forth to **console** and **sources** the see the effect of each step] clicking nextt step
---
use for loop in a function
```js
function (shoppingList) {
	for (i = 0; i < shoppingList.length; i++) {
		console.log("Adding to Cart" + shoppingList[i]);
	}
}
const shoppingList = ["milk", "eggs", "bread", "butter"]
```

- Infinite Loop (Loop Error)
	- The loop runs for infinite times. This happens when the condition falls for some reason.
	- [Open in Default Browser] to avoid a potential infinite loop for the time being
	- or turn off Auto Save and use Open in Live Server 
- Break statement
	- used to exit a loop immediately, regardless of the loop's condition.
- Continue statement
	- skips the current iteration and moves to the next iteration of the loop.

==Return and if loop inside for loop
## The Power of return: 

- The moment JavaScript hits a return statement, it drops everything and exits the entire function immediately. It doesn't just stop the loop; it abandons the rest of the function code entirely. Because the function terminates right there, JavaScript never reaches the console.log(1) at the bottom.


```JS
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
```

---
## while loop
- while executes the code in the while block as long as the condition returns true.
- After every single code execution, it comes back and checks if the condition is still true.
```js
// initialize
while (condition) {
	// code block to be executed
	
	update
}
```

Eg:
```
var f=0;
while (f<3) {
	console.log(f);
	f++;
}
```


## do/while loop
```js
let i = 0;
d0 {
	console.log("test");
	i++;
} while (i < 2)
```
---
## Example - Add up until a number
```js
function sum(a) {
	if (typeof(a) != "number") {
		return "enter number only"
	}
	let total = 0;
	for (i = 1; i <= a; i++) {
		total += i;
	}
	return total;
}
let result = sum(13)
console.log(result);

```

![[Pasted image 20260601105200.png]]

---
---
==P2==
# Intro to object oriented programming(OOP)
## The Object Oriented Data Model
- Using structured data like Array is very helpful. But not enough to efficiently describe real objects to computers.
- For that we use Data models to better describe entities.

Definition of a **Data model**:
- [A model that organizes elements of data and standardizes how they relate to one another and to the properties of real-world entities].

- One of the most commonly used data model is the Object Oriented Data Model


In JavaScript, understanding the relationship between 
- **objects**, **classes**, and **inheritance** is like understanding the relationship between 
- a specific car, the blueprint for that car, and the factory that upgrades the blueprint.

### What is Object oriented Data Model? 
- Simply put, this is an attempt to describe objects to computers in a similar way we people understand them.
- This Object Oriented Data Model has the following basic structure

Components of object-oriented data model
1. **Object** - are the things we are trying to define to the computer 
2. **Properties or Attributes** - Characteristics of the thing we are describing
3. **Method/Function (Action)** - actions that can be performed on objects. they are Anonymous function.
	- we need to call it using ().
4. **Events** - [occurs when an object sends a signal that an action has taken place]. 
	- What happens to the thing when we interact with it.
5. **Classes** - are a template for creating objects.
6. **Inheritance** - lets new class to inherit the properties and methods of the old class. 

- Example: Describing a Car using the OODM
	1. The object: car
		1. [Attributes (Properties):
			- Model: color of the car
			- Make: manufacturer of the car
			- Color 
			- Doors
			- Year
		- [Methods (Actions)
			- Start Engine: function that starts the car's engine
			- Drive: function that allows the car to move forward
			- Stop: function that stops the car
			- Car Accelerates 
			- Car Decelerates 
		- [Events
			- enter -> startCar
			- up arrow > accelerate
			- down arrow > decelerate
- It has specific attributes(properties) that describe it and methods that define what it can do.
- ***At this point, the computer would have some understanding of what a car is. It still doesn't know everything about a car. For example, it doesn't know it has windows or tire ;)***

---
## Object Oriented Programming in JavaScript
### Definition:
- OOP is a programming paradigm that relies on the concept of object.
- It is an approach to problem solving where all computations are carried out using objects.

- The basic idea of OOP is that we use objects to model real world things that we want to represent inside our JavaScript program, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.
- Objects are the center of an Object Oriented Programming. Most modern day programming languages including JS use this model.

### What is JavaScript Object
- An object is a non-primitive, structured data type in JavaScript.
- A JavaScript Object is a [collection of properties and methods, defined as a key-value pair. Each property has a key and a value]. 

---
### How to create an Object in JavaScript
- Creating object using object literal - {}
- literal notion: `var a = {}`
	- `console.log(a) //{}

Syntax:
1. Object declaration syntax
	`let exampleEmptyObject = {};
2. key: value syntax
```js
let person = {
	firstName: "Abebe",
	lastName: "Kebede",
	birthday: "Jan 1st",
	leg: "Two very useful body parts",
			
	walk: function() {
		console.log("I can walk");
	}
	talk: function() {
		console.log("I can talk");
	}
}
```
#### Accessing Properties
- The dot notation (.)
	- Used when you know the exact property names and they are valid identifiers.
	- Syntax: `objectName.PropertyName`
	- Eg: `console.log(person.firstName);
- Bracket notation (Array-like Notation ([]))
	- Used when the property name is [Dynamic] or not a [valid identifier] (contains space like "first name" or special characters)
	- Syntax:
		- `objectName['peopertyName'];`
##### Dynamic property name Example
```js
let x = "firstname";
let user = {
	firstname: "Abebe",
	lastName: "Kebede"
}
console.log(user.x) //WONT DISPLAY ABEBE
console.log(user[x]) //ABEBE
```

#### Accessing object methods
- Example:
	- `person.someFunction()`

#### Accessing Nested Objects
- Example
```js
var person = {
	firstName: "James",
	lastName: "Bond",
	address: {
	city: "London",
	country: "UK"
	}
}

person.address.city; //returns "London"
```


---
- The [this] value **references the [object] that contains the method**:
Eg
```js
let person = {
	firstName: "Abebe",
	lastName: "Kebede",
	
	fullName: function() {
		return this.firstName + " " + this.lastName; //same as
		return person.firstName + " " + person.lastName;
		OR
		return `${this.firstName} ${this.lastName}`
	}
}
```
- **this** will represent the object that the function is defined in ONLY if we use normal function.
	- we can't use this if its defined with arrow function 


---
## JavaScript Object Constructors
Definition:
- A constructor is a **function that initializes an object**. 
- It is a "[blueprint]" for creating many objects of the same "[type]".

- **Instantiation** is the process of creating an instance (or object) from a constructor function in object-oriented programming.

- Rules or good practices creating a constructor function
	- Name constructor function with an **Upper-case first letter**.
- Eg:
```js
function Person(first, last) {
	this.firstName = first, //this.property = argt
	this.lastName = last,
	
	this.fullName = function(){
		return this.firstName + " " + this.lastName;
	}
}

console.log(new Person("abe", "kebe"))
```

- How to create object instance from a constructor function
	- Use they keyword "[new]" followed by the name of the constructor function to create objects of the same type.

Eg
```js
var myClassNote = new Person("Abebe", "Kebede");
```

- "[this]" value/keyword
	- inside the constructor, "this" refers to the new object being created.

```js
function Car(make, model) {
	this.make = make,
	this.model = model,
	
	this.displayInfo = function () {
		return `{${this.make} ${this.model}`;
	}
}

let toyota = new Car("Toyota", "Camry");
let Ford = new Car ("Ford", "dd")
```

---
## Mostly used built-in JS object 
Here are all the Built-in Javascript objects
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

- Properties vs Methods in JS
	- Property is what an object has
	- Method is what an object does.

Among the list above, these are some of the built-iin JavaScript Objects that we use a lot.
- String
- Array
- Math
- Number
- Date
- Object
- JSON
- RegExp

---
## The top three most used JavaScript built-in Objects
### 1. String object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string

2 ways of creating strings
```js
1  . var example = "Abebe"
1. var example2 = new String("Abebe")
// No difference so the 1st one is preferred 
```

The compiler uses "Abebe" it as either
- string primary data or 
- string object

```js
const myString = new String("Hello, world!);
console.log(myString);
```
![[Pasted image 20251006232011.png]]

- **string objects** are used to work with test. It works with a series of characters.
- Just like any other object, the string Object also has properties and methods that we can use.

- **Commonly used Property**
	- length
		- `console.log(str.length)
- **Commonly used methods**
	- charAt(index)
	- toLowerCase()
	- toUpperCase()
	- substring(start, end) - endIndex NOT Included
	- indexOf(searchValue)
	- split(separator) - what the strings are separated with
	- slice(startIndex, endIndex)
		- can accept negative index
```js
var st = "Hello There Young Lady"
console.log(st.charAt(6)); //T
console.log(st.toLowerCase())
console.log(st.toUpperCase());
console.log(st.substring(6, 11)); //There
console.log(st.indexOf("H")); //12
console.log(st.split(""));
//["H", "e", "l", "l", "o", " ", "T", "h", "e", "r", "e".....]
console.log("Apple, Banana".split(", "));
// ["Hello", "Banana"]
console.log(st.slice(0,5)); //Hello
console.log(st.slice(-1)); //y
console.log(st.slice(-3)); //ady
```

### 2. Array object

**Commonly used property:**
- length()

**Commonly used methods:**
![[Pasted image 20251008085710.png]]


- pop()
	- remove an item from the end and returns it
- shift()
	- remove an item from the front and returns it
- push()
	- add an item to the right of an array
- unshift()
	- add an item at the front of an array
- concat()
	- adds at the end
- join()
	- joins with ("") - no space, or ('-') - hyphen
- slice()
	- `['a', 'b', 'c'].slice(1) //['a', 'b']
- indexOf()
	- `['a', 'b', 'c'].indexOf('b') //1
- includes()
	- `['a', 'b', 'c'].includes('c') //true`
- find()
	- `[3, 4, 6, 8].find((n) => n % 2 !== 0) //6
- findIndex()
	- `[2, 4, 3, 5].findIndex((n) => n % 2 !== 0) //2
- reduce()
	- `[2, 4, 3, 7].reduce((acc, cur) => acc + cur) //16
	- brings all of the elements to one - by adding, multipilying, -, /
- at()
	- can take -ve value
	- `[3, 5, 7, 8].at(-2) //7`
- every()
	- `[2, 3, 4, 5].every((x) => x < 6) //true`
	- if every element satisfy the condition
- some()
	- `[3, 5, 6, 8].some((n) => n > 6) //true`
- reverse()
	- `[1, 2, 3, 4].reverse() //[4, 3, 2, 1`
- isArray()
	- returns true if the argument is an array, or false otherwise.
- filter()
	- Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
	- `[1, 4, 7, 8].filter((n) +> n% 2 == 0) //[4, 8]
- forEach()
	- calls a function for each element in the array.
- map()
	- returns a new array containing the results of calling a function on every element in this array.
	- `[3, 4, 8, 6].map((n) => n * 2) // [6, 8, 16, 12]
- sort()
	- sorts the elements of an array in place and returns the array


```js

```


### 3. Math object

**Commonly used methods:**
- Math.ceil
- floor()
	- Returns the largest integer less than or equal to a number.
- min()
	- Returns the smallest of zero or more numbers.
- pow()
	- Returns base to the exponent power, that is base exponent.
- round
- random

```js
let random = Math.floor(Math.random() * (max - min + 1))

```



---
---
---
# practice Questions
```js
function numbers10(){
    for (i=1; i<=10; i++) {
        console.log(i)
    }
}
numbers10(); // 1 2 3 4 5 6 7 8 9 10


function numbers10(){
    for (i=1; i<=10; i++) {
        return i
    }
}
console.log(numbers10()); // 1

// use console.llog because return immediatelyy stops the function
```