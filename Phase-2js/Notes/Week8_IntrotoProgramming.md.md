
Created on: Sept 2025

==By the End You should MASTER these topics:==
```
- Meaning of JS and purpose of learning it
- what is meant by interactive webpages
- Syntax and semantics
- Using the console and debugging
- Variables (declaring, assigning value, changing value, rules of naming variables)
- Data structures: meaning and types of data structures in JS (number, string, boolean, undefined, null, array)
	- Operators: use and types (arithmetic, assignment, string and logical operators)
	- Array (definition, declaration, adding values to an array and accessing array values with index)
- Weak typing in Js
```

==Start with Asking WHY??==

Topics:
- Why do we need to learn JavaScript
- Definition of JavaScript a language to develop interactive web pages
- Definition of JavaScript a programming language to instruct our computer
- Definition of JavaScript a scripting language to instruct the browser
- Core JavaScript: syntax and semantics
- JS is a language we use to send intstructions to the browser or the computer.
- Including JavaScript in our HTML and using the console for debugging JavaScript
- Core JavaScript (variables): declaring variables
- Core JavaScript (variables): assigning value to and changing value of a variable and rules on naming variables



===============================================================

-----
-----

==Part I==
==Introduction to programming basics==
# Why do we need to learn JavaScript
=================================================
## Intro 
- HTML - sets the webpage structure
- CSS - styles the webpage, control presentation, formatting and layout
- JS - logic-based programming language that can be used to modify web content and make it behave in d/t ways based on the user's action

## Why we need to learn JS?
- The best way to answer this would be to list out all of the things you would need to do as a full stack web developers
- In this list, you have to be clear where JavaScript fits in the whole picture
	- You usually start from the design and have to conver the design (PSD) to a webpage (you use HTML, CSS and Bootstrap for this)
	- When you want to add some interactivity on the web page (You use JavaScript)
	- If your webpage saves and/or retrieves data, you would need a database (MySql or MongoDB)
	- To get the data from the database, you would need to use  programming language(Javascript)
	- If you host your web page somewhere on a remote server, you would need a web server too send the page to the user. (Apache or Node). Id you use Node, you need... (JavaScript)
	- If you want to make your web page faster and robust, you would need to use frameworks like React or Angular (JavaScript).

- HTML - sets the webpage structure
- CSS - styles the webpage
- JS - controls the reaction based on the user's action
![[Pasted image 20250717100841.png]]

### Uses of JS
- adds interactivity to the web page
- retrieves data from the web page that is entered by the user
- brings data from the database and display it on the web page (Node.JS)
- serves a web page from a server (Node.JS)
- makes a web page faster and robust through a framework (React.JS)
- can update and change both HTML and CSS


## What is your role as a front-end JavaScript developer? 
- A front-end developer lists out all the possible actions a visitor might take on your website, chooses those actions you want to respond to and finally write a script/logic that responds to whenever an action is taken by a user.
	• **Responding** can mean as simple as changing color or popping a text on the screen that would be meaningful to the user that took the action.
	• **Action** means anything the user does. It can be clicking or hovering over a specific element of your web site.
	• You can take evangadi.com’s sign up/login page as an example. When you try to click on the login button without putting an email address, the email input’s background color changed to red to alarm you that you need to provide your email address. 
	- The website is basically responding (by changing the background color to red) to the user’s actions.

----
# Definition of JavaScript a language to develop interactive web pages
### What is JavaScript?
- Dictionary Definition
	- JavaScript is an **object-oriented computer programming language commonly used to create interactive effects within web browsers** (in the same page).
- mozilla.org definition [original developer]
	- JavaScript is a scripting or programming language that allows you to implement complex features on web pages.

### Key words/phrases from these definitions:
- Computer programming language
- scripting language
- interactive effects
	- within web browser


---
## 1. Definition of JavaScript a programming language to instruct our computer

### What is Computer Programming language?
- Definition:
	- [Computer Programming is a way of giving instructions to a computer on what it should do].

- One thing you have to understand is, **Everything in your computer's processor (collection of transistors) and memory works in binary**.
- This is because the mechanism we store data in computers is by using transistors whose only job is to serve as a switch to let electricity pass or not pass.
- Its the letting electricity pass we call 1 and not letting electricity pass we call 0.

T T T T T - transistors [(flip-flop)] saved on the memory/hard-drive
0 1 1 0 1

Collection of transistors who Remember which transistors were off or on is -> **Flip-flop**
- i small digital circuit that can hold one bit of information: either 0 or 1
-  This is because the mechanism we **store data in computer is by using transistors whose only job is to serve as a switch to let electricity pass or not pass.
- It is this letting electricity pass we call 1 and not letting electricity pass we call 0. This is it!! That is the only thing our


base 10 -> 0-9 eg. 57
base 16 -> 0-9 and a-f ????????
base 2 - binary 0 1

- PROCESSOR: computes different data
	- There are circuits that can 
		- add and subtract
		- graphics circuits
- Computing example: instruction to add
	- computer is the one that does it

---
---
### Computer language
- is divided into 3
### 1. **Machine language (low level language)**
- is a collection of 0 and 1 (binary)
- computers only understand machine language
**To add 57 and 14**
-  **1010101010   010101   010101 (computing) -**
	1010101010(ADDER)
	It is a [Machine code]
---
### 2. **Assembly Language**
- uses mnemonic (abbreviation for an operation) codes
- written for the [CONVERTOR]
 **57 + 34**
 - **ADD 010101  010101
- (Human level)
- Follow the compiler's rules

- Examples of mnemonic codes
	- ADD -> addition 
	- SUB -> substraction
	- MPY -> multiply
---
### 3. **Programming language (High level language)**
- a set of rules that instructs a computer to perform specific tasks
- understandable by human
- written for the [COMPILER]
**57+13**
- **57 + 13**
- Different programming languages different compiler's rules
- Examples of high level language
	- JavaScript
	- C
	- C++
	- Java

![[Pasted image 20250717152922.png]]

- How does programming language instruct computers?
	- it instructs it through mahcine language
	
- Programming language--> Translator program --> Machine language

- What are translator program?
	- converts program that are written in human readable format into machine understandable format

---
### There are 3 types of translator program (convertor)
### 1. Assembler
- Assembly language --> Assembler --> Machine language
### 2. Interpreter
- High level language --> Interpreter --> Machine language
- it translates the program line by line
### 3. Compiler 
- High level language --> Compiler --> Machine language
	i.e. 57 + 10 --> Compiler --> 11000 010010 101110
- It translates the whole program at once, and it generates the **object code** along with a list of errors.

---
## 2. Definition of JavaScript a scripting language to instruct the browser
### What is a scripting language?
-  is a programming language that is **interpreted** 

- Some programming languages are **not written to directly communicate with the processor**. They are rather just [developed to communicate with just one other software] (browser, Visual studio, terminal) and not necessarily to be converted to binary. Means, they are providing some script the software should follow or do. These languages are called [scripting] languages.

- For example, JavaScript was originally developed to only communicate with web browsers. The web browsers were the ones that communicate with the processor. For that reason, JavaScript didn't need a compiler that converts it to the Machine code. It only need to be understood by the browser.

- To understand it, Every browser have their own JavaScript engine (Interpreter) which understands JavaScript codes. understands JavaScript codes. These  kind of language which are understood by other software are called interpreted/scripting language.

- Every browser has a JavaScript engine that takes our JavaScript code and converts it into something that the browser can understand.
	- IE - Chakra
	- Chrome - V8
	- Firefox - SpikerMonkey
	- Safar - JavaScriptCore

- **Interpreted languages are slower compared to compiled language.**
	- JavaScript used to be an interpreted language, but the introduction of JIT compilation in modern JavaScript engines (like V8 in chrome and Node. js, SpiderMonkey in Firefox) has blurred the lines.
	
	- Just-In-Time (JIT) compilation
		- is a method of executing code that combines aspects of [both interpretation] and [compilation].
		- Upon encountering JavaScript code, the engine will interpret it initially but will compile frequently executed parts into machine code for future execution.



Script (JavaScript) --> Interpreter --> Application (Browser)

** **JavaScript is both a programming and [scripting] language**
- can talk to computer after being compiled
- and can talk to an application after being interpreted


----
# Getting Started with JS
# Core JavaScript: Syntax and Semantics
- JS is a language we use to send instructions to the browser or the computer.

- For the interpreter or the compiler to understand our instruction, we need to follow a standard that is agreed up on to follow both by the developers of the compilers and the programmers. That standard is the called **ECMA standard.
- The common programming syntax that you can use everywhere are called the **Core JavaScript**. ==It supports both client and server side==.
- Specific instructions that are only understood by the Browsers are called Client side JavaScript. - This usually is related with DOM. 
- Finally, JS instructions that are mainly written to communicate directly with the computer are called Server Side Javascript.


### What we're going to learn
- What we are going to cover in here is the standard way of writing a JS code in a way that can be understood by the interpreters or compilers. 
- All programming languages have their own way of formatting the instructions.
- This standard way of formatting a programming language is called the **SYNTAX** of the programming language.

- If we make a mistake of not following the standard syntax, the compiler or interpreter wouldn't understand out code. Means our code won't work.
- The first thing we need to learn is the syntax of JavaScript.


- Then there is the **Semantics**. In programming language, **Semantics is the interpretation/meaning of the script you write.
- Even though we write the script with the right syntax, sometimes the [script might be TRANSLATED in a different way that we anticipated]. (d/t outcome)

- One **best practice** you should follow when writing script is to [check every single line of code as you write it].
- Both for syntax and semantics error.
- This means you need some kind of way to double check your line of code as you write it.
- This process of checking your script is called debugging.

- The only way the debugger would know if your code works or not is by actually compiling or interpreting it. That means we either need a compiler or an interpreter to help us double check our code. This would be our feedback system.


- One thing that is easily available for us to do the debugging is the interpreters that we find on our browsers.
- Most browsers have the console window to display syntax errors and other things we write on the console. This console is one thing we use the most to receive feedback from the interpreter.
- So, we will be using the console as a way of double checking everything we write.

---
# Including JavaScript in our HTML and using the console for debugging JavaScript
- Just like HTML and CSS, JS is also a text file

- We can include the JS code inside of our HTML file and load it on our browser so that the interpreter can execute the code. **THREE ways**

1. [Including an external JavaScript file in HTML (Recommended)
- 2 places
	- head tag
	- **body tag** - "RECOMMENDED" because it depends on the HTML above it
- The `<script>` tag is used to include a Javascript file inside our HTML.
	- attribute [scr=""]
2. [Inline]
	`<button onclick="alert("hi")"> click me </button>`
3. [Embedding the JavaScript Code in your HTML (Internal)

console.log()
- clg or log - for abbreviation in VScode

---
# Core JavaScript (variables): 
## Variables
- A place where **script temporarily saves data to use it later in the script**
- It is basically saying, hey remember this data, we are going to use it later.
- The name of the variable is used because the value in variable can be changed when the script runs.

## Declaring Variables
- This is announcing/introducing the variable name you want to use in the script
	- eg: var width
		- var - JS keyword to declare a variable
- Newer ways of [declaring variables] is introduced in 2016 (EC6)
	- let and const

## Assigning value to a variable
- Once declared, we can assign/give a value to the variable
	- Eg. let width;
		width = 10;
- You can now use the variable by using its name

## Changing the value of a variable
- Once declared and assigned, the value of a var can then later change the value with in the script
- Eg
	- var width = 10;
	- width = 12;
- At this point, width is 12, The latest value always overrides the ones before hand

### var, let and const
- **var** - you can re-declare
- **let** - you cannot re-declare again in the same scope, 
	however you can reassign its value
- **const** - you cant re-assign

## Rules for naming variables in JS
- should begin with a letter, $ sign or _
	- cannot start with number
	- dont use _, space or . on a variable
	- dont use reserved key words
	- variables are case sensitive
	- If the variable name uses multiple words capitalize the first letter of each word except the first one (Optional)
		- Eg. var 



`1 line in JS = Statement
`ends with ;


====
===
---
---

==Part II==
==Introduction to programming basics==

Topics:
- What is data structure and why do we need to structure data?
- Types of data structures
- Operators
	- arithmetic and assignment operators
	- string (concatenation) and comparison operators
	- logical
- Weak typing
- Arrays: definition, declaration and adding values to an array, accessing array values with index

---
# What is data structure and why do we need to structure data?
## What is Data Structure?
- Data structure is a particular way of organizing data in a computer so that it can be used efectively.
- learning programming language starts by understanding wat data is and how it is structured for effective use.
- Data structures are the same for almost all programming language

## Why we need data structure?
- brings together the data elements in a logical way
- facilitates the effective use, persistence and sharing of data
- is the building block for more sophistocated apps

- **DS** means of organizing and storing data in computers
	- in  such a way that we can perform operations on the stored data more efficiently

NOTE
- Data structures and algorithms are concepts that are independent of progarmming language
	- therefore, one you master them in your favorite language it's relatively easy to switch to another one


- data is the only thing computers understand
- we need to give them a lot of data for them to be able to understand us and our world better
- if we just store data in the computer without any organizational structure, it quickly becomes very hard to use. It becomes very difficult to **RETRIEVE** and use it later when we need to use it.

---
# Types of data structures

## Primitive:
- are native/predefined to the programming language
	cant be broken down any further Eg. alphabet letters
	- Number: +ve or -ve
	- String: textual data
	- Boolean: holds only two values true or false

**Other primitive** js data types
- undefined: if a variable has been declared, but hasnt been assigned a value, has the value undefined
	- var k;
- Null: represents an intentional absence of any value and object
	- not equivalent to an empty string ("") or 0, it is simply nothing.
	- var a = null;
- symbol
- Float
- Character
- BigInt

## Non-primitive: 
- are not defined by the programming language but rather by the programmer.
	- data structure
	- can store the data of more than one type

Two types 
- linear data structures
- non linear data structures
### 1) Linear data structure
- Elements are arranged in a sequential manner and each element is connected to the element in front of it and behind it.
	-  Array
		- used for storing multiple values in single variable
		- elements accessed through index (position)
	- Stack
		- LIFO (last in first out)
	- Queue
		- FIFO (first in first out)
	- Linked List
		- store values in the  form of a list

### 2) NonLinear data Structure
- Elements don't stay arranged linearly or sequentially **(hierarchially)**
	- Tree
		- link nodes in aa parent/child relationship
		- eg. DOM tree
	- Graph
		- Social Media network
		- uni-directed or bi-directed

	- Hash table
		- key and value(bucket)
		- keys -> has function -> buckets
			- way passwords are stored 

- typeof()
	- typeof(null) -> Object



---
# Operators
## 1. Arithmetic and assignment operators
- **Assignment Operator** ( = )
- **Arithmetic operator**
	- Operators work in a similar way we use them in math
		- + -> Addition, -> Subtraction, * -> Multiplication, / -> Division
		- BODMAS
	- Modulus (reminder) operator (%)
	- increment, decrement operator
	- addition assignment and subtraction assignment operator

## 2. String (concatenation) 
- When we use the [+] and [+=] sign with string data type, the two variables just got concatenated 

 - The way you identify some data as string is by adding quotation marks around it
	 - "4" -> numerical string

```js
let firstName = "Abebe";
let lastName = "Kebede";

let fullName = `${firstName} ${lastName}`;
let fullname = fullName + lastName;
console.log(fullName)
```
## 3. Comparison operators
- Comparison operations always **return a boolean value
	- == -> Equal to compares only the values
	- === -> Equal value and equal type (strict)

	- != -> Not equal
	- !== -> Not equal value Or type 

	- >
	- <
	- >=
	- <=
## 4. Logical Operator
- We use logical operators to perform **multiple comparisons**
- We use these operators when we want to write conditional statements.
	- && -> Logical [and
	- || -> Logical [or
	- ! -> Logical [not

- true && true = true
- true && false = false
- false && true = false
- false && false = false

### order of operation
- Not -> AND -> OR

---
# Weak typing
- **Weak typing means the data type of a variable can change**
	- Eg. var a = 5;
	- a = "text";
	- a = "true"

- If you use a data type JavaScript don't expect, it tries to make sense of the operation by converting the data type using its own best guess.
- This is called **TYPE COERCION**.
	- Eg. "5" + "Test" results "5Test";
	- "Test" + 5 -> "Test5"
	- 5 + 6 -> 11


- Because of type coercion, entry value in JavaScript can be translated to a "[True]" of "[False]" value
	- Meaning: **Any of the following can mean True**
		- var a = true 
		- var a = "any string/text" including space;
		- var a = 8; (any number other than 0)
	- Meaning: **Any of the following can mean False**
		- var b = false;
		- var b = 0;
		- var b = "";
		- var b;

if u want strong syntax => **Typescript**

---
# Arrays
## Definition
- **an array is a special type of data structure**
- instead of just storing one value, an array stores a list of values
	- Best to use arrays when working with lists of related items
		- Eg. colors of white, black and orage

## How to declare an array
- Array can be declared just like any other variable. The name of the Array is also going to be the variable.
- The difference is in the value. Array contains multiple values.

## Declaring empty array
- You use square brackets to represent arrays
	- `var exampleArray = []

## Adding values to an array
- Arrays can include multiple values as a group
- You use the "," sign to separate multiple items of an Array
	- Eg `var colors = ['white', 'black', 'orange']
- Arrays are pairs of keys and value
	- If the keys are not provided, then automatic numbers starting from 0 will be assigned as keys.
	- These automatic key of an array are called indexes.
		- 0: white
		- 1: black
		- 2: orange
## Accessing array values with index
- If you want to access a specific value from an array, we use the key to use the value
	- Example to access the value of white we use `colors[0]


==============================================================
==Practice Questions==
1. 2.0 == "2"
2. 2 < "John"
3. 2 > "John"
4. "2" > "12"
5. 1 == 1 || 2 == 2 && 3 == 7

the answers are T, F, F, T, T
- Here we can see that when numbers are written as [strings the 1st digit is the one that's compared] and 
- the operator [&& precedes ||

5. What is the value of y from the following statements?
	let x = 10;
	let y = x++;
	A/ 10
	B/ 11
	C/ 12
	D/ 13
6. What is the output of (+”2”+2)?

 x++ post increment returns the original value 10 & then increments so
	y=10
	x=11
+"2" converts the string "2" to number 2 so result is 4

![[Pasted image 20250917234506.png]]
![[Pasted image 20250917234630.png]]

![[Pasted image 20250917234613.png]]



