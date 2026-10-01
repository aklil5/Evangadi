
==P1
# jQuery

1. What is jQuery? Why do we need it and what can we do with it?
2. Adding jQuery library to our web page
3. Selecting elements with jQuery (id, class, element selectors)
4. Selecting elements with jQuery (filters)
5. Updating or altering values: content and elements
6. Altering values: attributes, form value, looping through elements
7. Handling events
8. Effects and animations in jQuery

---
# 1. What is jQuery? Why do we need it and what can we do with it?
## What is jQuery 
- jQuery is just a Js library that you include on your web page
- means, it is written using JS. The only difference is, it is designed to provide a simpler way of doing things in a more compatible way.

- there are pre-written functions
- its built on top of js

## Why we need jQuery
- main reason is to provide a simplified way of handling tasks, that you normally do with js.
- the motto of jQuery is "**Write less, do more.**"

- [Cross browser compatibility]
	- jQuery has feature detection to find the best way to do things
	- chrome, firefox, safari, edge

- [Simpler selection method]
	- if you use vanilla js, some methods that you use for selection dont work on older browsers.

- [There are simpler ways of doing common tasks]
	- Loop through elements
	- Add and remove elements
	- fade elements
	- better event handling

- it provides a consistent result trough out different browsers


## What can you do with jQuery?
- just like JS, there are 3 main tasks you do with jQuery too
	- **Selecting**
		- provides simpler and css-like way of selecting
	- **Updating**
		- Multiple jQuery methods provide different ways to update, anmate and loop trough elements in a mch simpler way.
	- **Handling events**
		- allows you to bind events with elements without the need to write a fall back for older versions


- jQuery is just a JS library that you include on your web page
- Means, it is written using JS. **the only d/ce is that it is designed to provide a simpler way of doing things in a more compatible way**.

- DOM manipulation
	- selecting elements
	- updating elements
- Handling events
	- allows you to bind events with element with out the need to write a fall back for older versions
- effects and animations

## Advantages of jQuery
- Simplicity
- Simpler selection and updating method
- jQuery is Easy to learn


---
# 2. Adding jQuery library to our web page
- you can download and put it locally or use a cdn
- add it at the bottom just right before your js file
- always recommended to use the latest version available

- to download the file
	- https://releases.jquery.com/jquery/
		- open it and save it using **Crtl + S**

- or you can use the **cdn** - but it always needs internet access

- attach it to html using `<script src="">` tag
	- before the main js file

|**Method**|**Code Example**|
|---|---|
|**jQuery** (Library)|`$('#message').text('Hello World');`|
|**Vanilla JS** (Plain)|`document.getElementById('message').textContent = 'Hello World';`|


---
# 3. Selecting elements with jQuery (id, class, element selectors)
- To find and select an element, you can use a function called jQuery(). There is a short hand representation of this method. Instead of typing the whole jQuery(), you can just say **$()**
	- [jQuery() = $()]
- As you can guess from the name, this is the main and most used function in jQuery.
- The jQuery() returns a jQuery object of the selected element
- To select an element you can use a CSS-like selecting method with in the jQuery() method.


- Types of selectors
	- This is very similar with the CSS selectors
		- Basic selectors
			- \#id
			- .Class
			- element

```js
let elem = $("#adder")
console.log(elem);

let inputLists = $("#formID input")
console.log(inputLists);

let classs = $(".form-values")
```


- you usually need quotes when selecting elements, classes or id because [jQuery requires you to pass the selector as a string data type]
	- \# is illegal character to start a code with
	- . - considered as decimal
	- p - looks for a p variable declaration
- Three common times when you leave the quotes off are:
	1. when using keyword **this**
	2. When targeting global objects like **document** or **window**
	3. When you've saved the selector inside a variable

```js
$("#result").click(function () {
    $(this).hide()
} )


$(document).ready(function() { ... }

// NO QUOTES
```


---
# 4. Selecting elements with jQuery (filters)
- Filters
	- :first or first()
	- :last or last()
	- :even or even()
	- :odd
	- :focus
	- :empty or empty()
	- :nth-child(3)

- ==Two ways to insert==
```js
$("input").last().hide()
$("li").first().css()

$("input:last").hide()
$("input:last").show()
```

- Content filters
	- :has(selector) - checks if element exists in the child and returns the parent
	- :contains("text")
	- :empty()


- Visibility
	- :hide or hide()
	- :show or show()
	- :visible - selects those currently visible
	- :hidden



- use ==.css()== method to alter the style

- to specify the attribute
```js
$("h1[id=three]").hide()
```

```js
// let elem = $("#adder")
// console.log(elem);

// let inputLists = $("#formID input")
// console.log(inputLists);

// inputLists.first().css("background-color", "pink")


$("input:visible").css("background-color", "green")
$("input:even").css("background-color", "purple")


// inputLists.last().empty()



// let classs = $(".form-values")

// $("p:nth-child(2)").hide()

$("p:nth-child(2)").has("input")
$("p:contains('First value')").css("background-color", "pink")

$("button[id=submitButton]").hide()
```




---
# 5. Updating or altering values: content and elements
- jQuery object has many methods that you can use on the element that you select
- These are the common methods that you will use
- Methods to get or change content of elements, attributes or nodes
	- Content
		- html()
		- text()
		- remove() and empty()
			- remove() - removes selected element and all its child elements
			- empty() - removes only the child element of the selected eleme3nt
	- **you can add it with or without argument ==(get it or set it)


	- Updating Elements
		- before()
		- after()
		- prepend()
		- append()

```js
$("input").text("helo")
	// CHANGES THE TEXT OF THE INPUT
$("p").text()
	// Output is the text inside the input
```









---
# 6. Altering values: attributes, form value, looping through elements
- **Attributes**
	- addClass()
	- removeClass()
	- attr()
	- css()

- inserting css property as an inline has greater priority
- if you wanna change **multiple properties,** write it down as an **object**

```js
$("#samsg").attr("class", "yellow")

$("#korean").addClass("green")

$("#app").removeClass("yellow")
```


```js
$("#samsg").css("background-color", "pink")


$("#samsg").css({
    "background-color": "violet",
    width: "300px",
    color: "white"
})
```



- **Form value**
	- val()
		- sets or returns the value of form fields
	- isNumeric()
		- returns true if argt passed is in a number or numeric string, otherwise it returns false

```js
$("#second").val("1223")
	//will insert this value to the form input
```


```js
console.log($.isNumeric("4"))
```

- **Finding elements**
	- traversing UP
		- parent(), parents()
	- traverse DOWN
		- children()
		- find()
	- sideways
		- siblings()
		- next()
		- nextAll()

	- find()
	- parent()
		- returns the direct parent element of the selected element
	- parents()
		- returns all the ancestor elements of the selected element
	- children()
		- returns all the direct children of the selected element
	- next()
	- prev()
	- contains()
		- accepts native HTML DOM elements
		- **Syntax:** `$.contains( container, contained )`
	- has()
		- **Syntax:** `$(selector).has( childSelector )`

```js
$("ul").find("li").css("background-color", "pink")

$("ul").find("li").css({"border": "2px solid green"})
```


```js
console.log($("ul").has("li").css({"border": "5px solid pink"}))


// Syntax for CONTAINS
let parent = document.querySelector("#lists")
let child = document.getElementById("samsg")

console.log($.contains(parent, child));
```

- Looping through elements - 
	- unlike vanilla JS, jquery don't require us to write for loop to affect elements properties
	- assume we have multiple li's and we want to change the background color
```js
$("li").css("background-color", "pink")

// will change all the li elements
```






----
# 7. Handling events
==on()==

- jQuery again makes binding and andling events easier
- It uses the **on()** method to do that
- Just like any other method in jQuery, you start by selecting the element you want to respond to. The selection creates a jQuery object that you can use the on() method on
- Some of the most popular events the on() method deals with are

- Note: Each of these events have their own corresponding event binding methods.
	- Eg. There is a method called focus() or click() which are used to bind event handlers to the corresponding event


## 7.1 Commonly Used jQuery Event Methods
- $(document).ready()
	- method allows us to execute a function when the document is fully loaded.
```js
$(document).ready(function() {
    $("body").css('background-color', "red")
})
```


- click()
- dblclick()
- mouseenter()
- mouseleave()
- mousedown()
- mouseup()
- hover()
- focus()
- blur()

Example
```js
$("#showList").click(function(){
    $("#lists li").hide()
})

```


- mousedown - you push the button down
- mouseup - you let the button go
- click - the browser confirms a full down-and-up motion happened on the same element

**why use mousedown/mouseup**
- drag and drop
- hold to zoom/ hold to change
- detecting left vs right click
	- **click** usually responds to a standard left-click
	- **mousedown** can detect which mouse button (left, right, or middle) was pressed using the `event.which` property


- you can do multiple event 1 action or
- multiple event multiple action


## 7.2 The on() Method
- **single event** - ==TWO WAYS to do it==
```js

$("#app").on("click", () => $("#app").css("border", "6px solid pink"))



$("#showList").on("click", hideElement)

function hideElement(){
    $("#lists li").hide()
}

```

```js
$("#formID").on("submit", function(e){
    e.preventDefault();
    let firstValue = $("#first").val();
    let secondValue = $("#second").val();

    console.log("first value is: " + firstValue)
    console.log("second value is: " + secondValue)
})
```

- **Multiple events causing one action**
```js
$("#korean").on("mouseenter mouseleave", function() {
    alert("hovering on SOUL!!")
})
```


- **Multiple events causing multiple actions**
```js
$("#samsg").on({
    mousedown: () => $("#samsg").css("background-color", "pink"),

    mouseup: () => $("#samsg").css("border", "3px, solid, yellow"),

    click: () => $("#samsg").css("background-color", "green")
})
```

```js
$("#first").on({
    focus: function(){
        $(this).css('background-color', 'green')
    },

    blur: function(){
        $(this).css('background-color', 'pink')
    }
})
```





---
# 8. Effects and animations in jQuery
- Some of the popular jQuery Effects
	- Basic
		- hide()
		- show()
		- toggle()
			- hide and show together
			- [Always attach the toggle event to a separate button or trigger element that stays visible on the screen]
	- Sliding Effects
		- slideUp(seconds)
		- slideDown()
		- slideToggle()
	- Fading Effects
		- fadeIn()
		- fadeOut()
			- fadeOut("slow"), fadeOut(3000)
		- fadeToggle()
	- Custom
		- delay()
		- stop()
			- you can delay or stop the slidDown or Up
		- animate()
			- takes object


```js
$("#fruits").click(function(){
    $("#listsOfFruits").toggle()
})

// its attached to a separate button or trigger element
```

```js
$("#fruits").click(function() {
    $("#listsOfFruits").slideUp()
})

$("#fruits").dblclick(function() {
    $("#listsOfFruits").slideDown()
})
```

```js
$("#fruits").dblclick(function() {
    $("#listsOfFruits").fadeToggle()
})
```


```js
// animate
$("#fruits").on("click", function(){
    $("#listsOfFruits").animate(
        {
            width: "500px",
            height: "100px",
            opacity: 0.9,
            fontSize: "3em",
            borderWidth: "10px",
        },
        2000
    )
})

```


```js
// FROM THE QUESTIONS
//To print the content of an element on the console upon page refresh

$(function(){
	console.log($("#sample1"))
})



// To create a new element
let newEl = $("<li>").text("Facebook")
```


















---
---
==P2
# Asynchronous JS
## Callbacks, Promise and Async-Await (jQuery Based)==

1. Synchronous Programming
2. Asynchronous Programming
3. How to consumee/code asynchrunous JS 
	1. callback function
	2. Promises
	3. Async-Await
4. How to implement our own promise based API promise constructor

---
# 1. Synchronous Programming

JS is single thread


**Definition**
- Synchronous tasks are the ones that execute sequentially, one after the other, and while they're being executed nothing else is being done.
- At each line of the program, the browser waits for the task to finish before jumping to the next one.
	- These kinds of tasks are "[blocking]", because while they execute they block the execution thread, preventing it from doing anything else



```js
const studentName = "Abebe";
const greeting = `Hello, my name is ${studentName}!`;
console.log(greeting);
```

■ In the above example
1. Declares a string called studentName.
2. Declares another string called greeting, which uses studentName.
3. Outputs the greeting to the JavaScript console

- At each point, the browser waits for the line to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines. That makes this a synchronous program.



## How does the Browser & JS engine work together to execute synchronous JS
- There are 5 major tools involved to make this happen
	1. Memory/JavaScript heap
	2. Call stack
	3. Web APIs
	4. Callback queue
	5. Event loop

- Let’s discuss the first two for now, since those are used to handle the synchronous JS

### 1. Memory/JavaScript heap
-  The JavaScript heap is where objects are stored when we define functions or variables.
### 2. Call stack
- This is the synchronous part of the JavaScript engine component that tracks the current code being executed and lets the JavaScript engine know what code to execute next.

**Callstack example**
```js
const multiply = (a, b) => a * b;
const square = (n) => multiply(n, n);
const printSquare = (n) => console.log(square(n));
printSquare(4);
```


| callstack - 1 | callstack - 2  | callstack -3   | callstack - 4  | callstack - 5  | callstack - 6  | callstack - 7 |
| ------------- | -------------- | -------------- | -------------- | -------------- | -------------- | ------------- |
|               |                |                |                |                |                |               |
|               |                |                | multiply(4,4)  |                |                |               |
|               |                | square(        | square(4)      | square(        |                |               |
|               | printSquare(4) | printSquare(4) | printSquare(4) | printSquare(4) | printSquare(4) |               |
[printSquare is invoked


### The problem with synchronous JS
- The problem with synchronous JS comes when we encounter a **long-running synchronous function**.
```js
console.log("Start");
function delay(seconds) {
	const start = Date.now();
	let x = true;
	while (x) {
		const current = Date.now();
		if (current - start >= seconds * 1000) {
			console.log("hi");
			x = false;
		}
	}
}
delay(5); // Delays for 5 seconds
console.log("Doing something completely unrelated to the timer above");


// OUTPUT
// Start
// hi       "after 5 seconds of delay"
// Doing something completely unrelated to the timer above
```


- In the above example the function delay takes 5 seconds to execute, and the console.logs we have on the very first and last line has nothing to do with the function. 
- But **because of its synchronous nature** the last console.log has been affected, **it's forced to wait 5 seconds before printing to the console** window.





---
# 2. Asynchronous Programming
- Definition
	- Asynchronous JS **allows code to execute independently without blocking the main thread**, enabling efficient handling of tasks that may take time.
	
- Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous.
	- For example:
		- Making HTTP requests using fetch()
		- Accessing a user's camera or microphone using getUserMedia()
		- Asking a user to select files using showOpenFilePicker()




## Why Asynchronous Programming?
- Enhances performance by handling time-consuming operations efficiently.
- Prevents blocking the user interface (UI) and allows concurrent operations.
- Enables better handling of tasks like network requests, file operations etc

## How does the Browser & JS engine work together to execute synchronous JS

### 3. Web APIS
- Web APIs are a set of features and functionalities that the browser uses to enable JavaScript to execute.
- These features include
	- DOM manipulation,
	- HTTP requests (fetch method),
	- setTimeout among other things

- Think of it like a different "execution place" rather than the call stack. When the call stack detects that the task it's processing is web API-related, it asks the web API "Hey API, I need to get this done", and the web API takes care of it, allowing the call stack to continue with the next task in the stack.

```js
console.log("task1");
setTimeout(() => console.log("task2"), 0);
console.log("task3");



OUTPUT since it is Asynchronous
// task1
// task3
// task2
```


| callstack -1 | call stack -2       | call stack -3 | call stack -4            | call stack -5 | call stack -6       | call stack -7 | call stack -8        | call stack -9 |
| ------------ | ------------------- | ------------- | ------------------------ | ------------- | ------------------- | ------------- | -------------------- | ------------- |
|              |                     |               |                          |               |                     |               |                      |               |
|              | console.log("task1) |               | settimeout(clg("task2")) |               | console.log("task3) |               | console.log("task2") |               |


### 4. Callback Queue
- is a queue that stores the tasks that the web APIs return.
- Once the JavaScript engine finishes executing the synchronous tasks on the call stack, it continues to execute the asynchronous code found on the callback queue

### 5. Event Loop
- is a system to track tasks being executed at the external processor.
- Once the browser finishes processing the tasks under the synchronous stack (or call stack), the event loop will pass the tasks under the call back queue to the browser to be processed.


It constantly checks two things:
1. If the call stack is empty
2. If there's any task present in the callback queue

★ If both of these conditions are met, then the task present in the callback queue is sent to the call stack to complete its execution.




---
### Managing Asynchronous Control Flow in JavaScript

```js
let x;
function greet(sec){
    setTimeout(() => {
        x = "Hello"
        console.log("hi from setTimeout");
    }, sec)
}

greet(2000);

console.log("hi");
console.log("selam new");

console.log(x);


// // OUTPUT

// hi
// SELAM new
// undefined
// hi from setTimeout 
```

- X is undefined and therefore unavailable.
	- **how can we make x available**
	- AKA
	- how to make JS wait for setTimeout to finish




---
# 3. How to consume/code asynchronous JS
# 3.1 Callback function
- are functions that are passed as arguments to other functions.
- The function that takes the argument is called a "Higher order function", and the function that is passed as an argument is called a "Callback".


- NOTE: **Not all callbacks are asynchronous, what makes them asynchronous is if they are being called inside an asynchronous Web API.**

- Example of synchronous callback from previous lessons
```js
window.addEventListener("click", function(){
	console.log("Window clicked");
})
```


```js
function orderPizza (callback){
    console.log("order pizza");
    setTimeout(() => {
        const pizza = "🍕"
        console.log(`Your ${pizza} is ready`);
        callback(pizza);  // executes (calls) the function you passed in as an argt
        // callback is just a placeholder for "pizzaReady" -> js translates it to pizzaReady("\/\/")

    }, 2000);
}

function pizzaReady(pizza) {
    console.log(`Eat your ${pizza}`);
}

orderPizza(pizzaReady);

console.log("call a friend");
```

```js
// OUTPUT
	// order pizza
	// call a friend
	// your 🍕 is ready
	// eat your 🍕
```

- orderPizza - higher order function
- pizzaReady - callback function
- first synchronous tasks -> asynchronous tasks



### The Problem with callback function
Callback hell/ nesting a callback in a callback
- Callback Hell is a situation when callback-based code can get hard to understand when the callback itself has to call functions that accept a callback.
![[Pasted image 20260622221157.png]]


- For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the Promise.


---
# 3.2 Promises
- [A promise is an object returned by an asynchronous function, which represents the current state of the operation.
- At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

- are a fundamental tool for handling asynchronous operations in a more structured and manageable way, especially in scenarios like:
	- fetching data from a server,
	- reading files, or
	- dealing with time - consuming operations

- A [promise] is a special kind of object in js and has 3 possible states
	1. **Pending:** Initial state, neither fulfilled nor rejected.
	2. **Fulfilled:** the operation was successful, and the promise holds a [resolved value
	3. **Rejected:** the operation failed, and the promise holds a reason for a failure.


To see this in practice, we'll use a realistic case in which we fetch some data from an API endpoint and log that data in our console. We'll use the fetch API provided by browsers and a public API that returns Chuck Norris jokes.
### Using the fetch() API
- fetch() API - is an asynchronous WEB API thats used to make HTTP requests to a server and respond with a response data.

Example

```js
console.log(fetch("https://randomuser.me/api"));

// OUTPUT             // Promise { <pending> }
```
- we can **chain** other operations to it to be followed once it becomes **fulfilled**, using "[.then()]" method.

### Chaining promises (.then() method)
- using the **.then** method we can perform additional operations once the promise resolves/completes/fulfilled 


```js
fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => console.log(data.results[0]))
    //will return the 1st object
    
```

```js
fetch("https://randomuser.me/api").then(function(res){
   console.log(res);
   return res.json()
})
```
==the data will be available at the parameter of the function ==
	- **res or data**

the result of console.log(res) is 
- **Response object**

to **extract (UNPACK)** the actual result - in format of PROMISE - aka the json format, - [we use .json() method 

```js
fetch("https://randomuse.me/api")
    .then((res) => res.json())
    .then((data) => console.log(data.results[0]))
    .catch((err) => console.log("Something went wrong>>>", err));

// will an error because of the Type error in the api
// This error won't affect the code that follows
```


- we are asking it to apply the .json method to its result once the promise is fulfilled.
- But that’s not the only thing we did, we have a second .then method applied, that is because the “.json( )” method itself returns a promise.
- Finally, we are logging the output to the console window.


- Using the fetch() Web API - Example
	- consume the result using **.then()** method
	- handling rejections using **.catch** method

fetch returns promise which can be different states
- data will be available in the argument of the function
- response object


### Catching errors (.catch( ) method)
- The fetch() API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error.
- while the handler passed to then() is called when the asynchronous operation succeeds, the handler passed to catch() is called when the asynchronous operation fails/rejected.



- **Note1:** If the **callback in .catch()** **returns a value**, .[catch() will return a new promise with resolved status]: If the handler function in catch() returns a value, it means that .catch() is returning a new Promise with a resolved value. 
- Please note that this new Promise is resolved and has the returned value as its value

```js
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        reject(10);
    }, 3000);
});

myPromise.catch(function (result) {
    return result * 2;

// code below is same as the returned value above
    return new Promise(function (resolve, reject) {
        // resolve (result * 2);
    });
})

.catch(function (returnedResult) {
    console.log(returnedResult); //prints nothing
}).then(function (returnedResult) {
    console.log(returnedResult); //Prints 20
})

//Prints 20
```

```md
The .catch() Recovery Rule
==========================

The Rule: If a .catch() block successfully runs and returns a value, it heals the promise chain. It converts a failure into a brand-new resolved (successful) promise.

The Flow: Because the error is fixed, JavaScript switches back to "success mode." It will skip any following .catch() blocks and move directly to the next .then().

```


- **Note 2:** If the c**allback in .catch() throws an error**, .[catch() will return a new promise with reject()]: If the handler function in catch() throws an error, it means that .catch() is returning a new Promise with reject(). If reject() is the status of a promise, it can only by .catch(). Example:

```js
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(10);
    }, 3000);
});
myPromise.catch(function (result) {
    throw new Error(result * 3);
// new Promise below is same as the above thrown value
    // return new Promise(function (resolve, reject) {
    // reject(result * 3);
// });
}).then(function (result) {
    console.log(result); //nothing prints here
}).catch(function (result) {
    console.log(result); // prints 30
});

//Prints 30
```


**Note** that what ["succeeded" or "failed" means here is up to the API in question]:
for example, fetch() considers a request successful if the server returned an error
like 404 Not Found, but not if a network error prevented the request being sent




---

---
# 3.3. Async-Await
- is the latest way of dealing with asynchronism provided by JS.
- The **async** keyword gives you a simpler way to work with asynchronous promise-based code
- Adding **async at the start of a function** makes it an async function
- Inside an async function, you can **use the await keyword** before a call to a funcition that returns a promise.
	- This makes the code wait at the point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
- This enables you to write code that uses asynchronous functions but looks like synchronous code.
- To catch the error or rejection we can make use of try/catch blocks

| **Promises (.then)**         | **async/await**         | **What it actually means**                                       |
| ---------------------------- | ----------------------- | ---------------------------------------------------------------- |
| `fetch("...")`               | `await fetch("...")`    | Go get the raw response box from the web.                        |
| `.then((res) => res.json())` | `await res.json()`      | Unpack the box into readable data.                               |
| `.catch((err) ...)`          | `catch (error) { ... }` | If the internet drops or the server dies, handle the error here. |


```js
fetch("jttps://randomuser.me/api")
	.then((res) => res.json())
	.then((data) => console.log(data.results[0]))
	.catch((err) => console.log("Something went wrong>>> ", err))
	
	

async function logData(){
	try {
		let res = await fetch("https://rabdomuser.me/api");
		let data = await res.json();
	} catch(error) {
		console.log("Sorry, try again later")
		console.log(error)
	}
}

logData();
	
```




● **Example :** handling fetch method using async-await

```js
async function logData(){
    try{
        let response = await fetch("https://randomuser.me/api");
        console.log(response);
        let data = await response.json();
        console.log(data);
        const user = data.results[0];
        console.log(user);
    } catch(error){
        console.log(error, "tebelashe eko");
    }
}

logData()
```
- when json format is console.logged, we see
	{results: Array(1), info {...}}
		info
		==results==
			\[[Prototype]]: array
		\[[Prototype]]: object
- we can then see results[0] -> cause its an array

- We were able to wait for the promise to finish / complete using the await keyword and perform any additional operations we wanted afterwards.
- We handled any possible rejections from the promise using the “try catch” block.





try -> catch

```js
async function logData(){
    try{
        let response = fetch("https://randomuser.me/api");
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

logData()
```
- if we dont await for the fetch -> we only see a pending Promise on our console.
- async keyword is also necessary at the start of the function.









---
# 3.4. Promise() constructor function
# How to implement our own promise based API promise constructor

- The promise constructor function is a constructor function that exists in JS.
- it lets us create a promise object.
- It is initiated by other constructor function using the ["new"] keyword followed by the "Promise" constructor function.
- The Promise() constructor takes a **single function as an argument. We call this function** the [executor]

### The executor function
- [takes two arguments, which are both also functions], and which are conventionally called **resolve and reject**.
	- resolve used for success
		- its fulfilled
	- reject used for failure

- if the executor function **throws an error, reject is called automatically**. You can pass a single parameter of any type into resolve and reject.



```js
let test = new Promise((resolve, reject) => {
    resolve("hi class");
    reject("it's broken");
})

console.log(test);

// OUTPUT
// hi class
```

```js
let test = new Promise((resolve, reject) => {
    reject("it's broken");
    resolve("hi class");
    
})

console.log(test);

// OUTPUT
// it's broken
```

- it either says `fulfilled` or `rejected` based on whats ==first finds==, is it `resolve` or `reject`
- or else you will have to use an if statement

```js
let myPromise = new Promise((resolve, reject) => {
    const condition = true;

    if(condition) {
        resolve("Here is the data from YouTube DB");
    } else {
        reject("Sorry, couldn't get data")
    }
})

console.log(myPromise);

// OUTPUT // Here is the data from YouTube DB
```

**TO ACCESS THE result or CONSUME THE API**
[consuming API] means using it using methods like **.then(), .catch(),** and **async/await

```js
myPromise
    .then((data) => console.log("Data >>> ", data))
    .catch((err) => console.log("Error >>> ", err));
    
 // OUTPUT
 // Error >>>  Sorry, couldn't get data
```



**Example**
- [lets create our own promise based API called alarm
```js
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            reject("Alarm delay can not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

console.log(alarm("aki", 12));

// THIS will return only the Promise in pending state
```
==we will have to let it know what should happen when it comes to resolved state => consume it==
==there are 2 methods==
**1. .then() method**
```js
alarm("aki", -3000)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
```

**2. async await method**
```js
async function getUp() {
    try {
        let data = await alarm("bob", 2000)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUp();
```

```js
// Both will return Wake up, bob! or aki or the error
```



```js
async function displayData(){
    try {
        let response = await fetch("https://randomuser.me/api")
        console.log(response);

        let data = await response.json()
        console.log(data);

        const user = data.results[0]
        console.log(user);

        // // Create HTML elements to display user data
        const userContainer = document.getElementById("user-container");
        userContainer.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <h3>Name: ${user.name.last}</h3>
            <h3>Email: ${user.email}</h3>
            <h3>Location: ${user.location.city}, ${user.location.country}</h3>
        `;
    } catch (error) {
        console.log(error);
    }
}
displayData()
```




- **constructor function**
- **executor function**




---

---

==Questions==

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
```js
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
```

```js
// OUTPUT

// Hi
// Welcome to loupe
// Click the button
// You clicked the button!

// and the Web APIs will still have
	$.on('button', 'click', ...)
```




---
# The Golden Rule of Promises
- **`return` (anything):** Means _"Everything is fine, pass this data to the next `.then()`."_ (Even if the data happens to be an Error object).
    
- **`throw` (anything):** Means _"Something exploded! Stop everything and jump to the next `.catch()`."_


---


https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time
```js
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }
//code crashes here and skips all future .then() blocks
    return job(true);
})

.then(function(data) {
    console.log(data);
})
//skipped
.catch(function(error) {
    console.log(error);
// logs Defeat
    return job(false);
})
// skipped cause faulse
.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
//logs error
    return 'Error caught';
//returns normal text string
//this fixes the chain - since its saying Erro caught, and heres a normal piece of data to put back into the promise.. so next block will be .then()
})

.then(function(data) {
    console.log(data);
//logs Error caught
    return new Error('test');
// this dont cause an error by itself, it simply creates a standard js object
// returns an Error OBJECT 
// - since it didnt use the "throw" keyword, it treats it like any other piece of data - chain stays
})

.then(function(data) {
    console.log('Success:', data.message);
//logs: Success: test
})

.catch(function(data) {
    console.log('Error:', data.message);
});


// What is the OUTPUT
```



```js
if (data !== 'victory) {
	throw 'Defeat';
}
return job(true)
```

Immediately:
- this `.then()` stops
- `return job(true)` is skipped
- the promise becomes **rejected**

Execution jumps directly to the nearest `.catch()`. and error becomes -> **Defeat** only for that catch



---

```javascript
.catch(function(error) {
    console.log(error);

    return 'Error caught';
})
```
- the return 'Erro caught' - **resolves the promise** and will become the value of **data** and NOT error
- it is equivalent to
```js
return Promise.resolve('Error caught');
```


```
// OUTPUT
success  
Defeat  
error  
Error caught  
Success: test
```



















