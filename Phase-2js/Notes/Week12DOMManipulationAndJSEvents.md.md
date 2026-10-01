==P1
# DOM Manipulation
1. Relation between Js and HTML: why we need JS?
2. How do we add JS into our HTML
3. Understanding DOM: how do HTML and JS work together?
4. The DOM tree
5. DOM manipulation: 
	1. Introduction
	2. selecting elements  - individual, multiple elements
6. Selecting Elements 
	1. HTML collection vs NodeList)
	2. (traversing between multiple elements)
7. Altering values 
	1. working with HTML content)
	2. (working with HTML attribute)
	3. (working with inline styling)

---
---
# 1. Relation between Js and HTML: why we need JS?
- html DEFINES THE STRUCTURE of web page
- CSS provide style/look of the HTML page
- Js adds interactivity to the HTML page

## Recap
## How does a website work
### What is a Webpage?
- it is a properly tagged HTML text document.
- Main purpose: to display the text information thats included in the document in a well organized and visually meaningful way to the user.
- As a web page is simply a text document, we would need help to [create some useful visual representation of the text. A sw that helps is] **A Browser**.
- a web page without the help of a Browser is as helpless as a text document.


### The Browser
- The main role is to: create a visual representation of the text document based on the tags used on the text document.
- This process of creating the visual representation the browser follows is called **Rendering** 

- When the HTML file is saved locally, all the browser needs is a way to locate this resource file containing the HTML - through **URL** (Uniform Resource Locator). 
- since we are on a local computer, this URL is just the path to the file. Path is structured by the OS on the computer 

- The browser has a place to let us provide this location/ address of the file. It is called the address bar. (Located at the top of your browser)

- If an additional src - Js file is required, the browser needs help to understand the code on the JS file.
- Every browser has a JS engine that takes our JS code and converts it into sth the broser can understand.

	- IE Chakra
	- Chrome V8
	- Firefox - SpiderMonkey
	- Safar - JSCore

## Why do we need JS then?
- to **add instruction of how it should respond to an action taken on the browser**.




---
# 2. How do we add JS into our HTML
3 ways
## 1. Including JS code inline
```html
<body>
<button onclick="alert('Hello World!')">Click Me</button>
</body>
```


## 2. Embedding the JS Code in your HTML (On File)
- The **script** tag 
	- used to include/inject  
```html
<body>
	<script>
		console.log("Hello)
		function someFunction(){
			alert('Test')
		}
		somefunction()
	</script>
</body>
```
NOT RECOMMENDED - **Dont have Separation of Concern**



## 3. Including an external JS file in HTML (RECOMMENDED)
**1. At the bottom of the html page, right before the closing body tag**
```js
<script type="text/javascript" src="js/'script.js"></script>
```

**2. Inside the head tag using "defer" attribute**
```js
<head>
	<script src="script.js" defer></script>
</head>
```
`defer` keyword as an attribute (it makes sure to load the js at the end)

**3. Inside the head tag using "async" attribute**
```js
<head>
	<script src="script.js" async></script>
</head>
```



---
# 3. Understanding DOM: how do HTML and JS work together?
- NOTE:
	- DOM is not part of JS, or HTML
	- DOM is a set of rules where browsers use to recreate an HTML code in a form of an Object. they use the structure of that object to render the HTML code and display it on the browser.
		- JS interacts with the created DOM object.


## What is the DOM Object?
- is a structure / standard that allow js to access, modify and update the structure of an HTML page in an organized way.
- The DOM is a logical tree-like model/representation of our HTML.
- DOM represents the HTML page using a series of objects.


## Why do we have to understand DOM
- [Selecting] DOM elements: locate the element you want to work with
- [Updating] DOM elements: interact with the text, attribute or child of the element 
	- (This is where you apply your basic programming skills)

```js
console.log(document)

console.dir(document)
```
- shows key value pairs

go to **Document** -> **Body** -> **Children** -> all the elements are listed as array
**Document** -> **Body** -> **Children** -> **innerText**

```js
console.log(document.body.children[0])
```




---
# 4. The DOM tree
- When a browser reads HTML code, whenever it encounters an HTML element like [html, body, div ..etc..], it converts each one of them to **objects**. 
- Objects created by the browser are called **Node**.
- 
- The browser will treat the node obbjects as a tree-like hierarchy (DOM Tree) 

- JS dont understand what DOM is, its not part of the JS specification.
- **DOM is a high-level Web API provided by the browser to efficiently render a webpage and expose it publicly to the developer to dynamically manipulate DOM elements for various purposes.**

```js
var document = {
    html: {
        head: {
            title: {
                value: "The title"
            }
        }
    }
}

console.log(document.html.head.title.value); //The title
document.html.head.title.value = "Another title"
console.log(document.html.head.title.value); //Another title
```

- ==DOM Node== **(NodeList)** Vs. ==**DOM element== (HTML collection)**
	- DOM node represents everything - elements, text, comments and more
	- DOM element represents - html elements.



- [the DOM tree contains four kinds of nodes in it.]
- Everything that makes up your DOM is more generically known as nodes.
- Every NODE is an object on its own
	**1. Document Node**
	**2. Elem Node**
	**3. Attribute Node**
	**4. Text Node**

### **1. Document Node**
- the entire page
- contains multiple elements in it
- If you want to access any other node, you would have to pass through the Document Node
- The **Document object has multiple methods** that you can use to look and access a specific element within the DOM object.

### **2. Element Node
- are created to model each HTML tag we use in our HTML code
- Each of them are modeled as Objects
	Eg. elements:
```
	html, 
	head, 
	body,
	h1, 
	div, 
	p 
	a
```
- each of these Element objects have methods in them you can use to access and alter the texts and attributes in them

### **3. Attribute Node**

```html
href=""
src=""
id=""
style=""
```


### **4. Text Node**
```html
<p>Some text</p>
<div>Content text </div>
```



---
# 5. DOM manipulation: Introduction
- Manipulating DOM involves two steps
	1. Finding/selecting the element we want to work with - **accessing**
	2. Altering/update the text or attributes of that element - **modifying**
	3. Event/Action listening -**determining when**



```js
let myElement = document.body.children[0]

myElement.innerText = ""

```


- What makes all this possible is the **"document"** object.
	- The "document" object in js is the door to the DOM structure. its the name of the JS object that contains all the methods and properties to help us access and manipulate the DOM elements.
	- The "document" object allows us to access the root node of the DOM tree.




---
# 6. DOM Manipulation: selecting elements
Selecting in JS can be divided into three types
	1. Select an individual element
		- finding one specific `<div>` element
	2. Select multiple elements
		- finding all `<div>` elements with some similar property
	3. Traversing between multiple elements
		- finding a  `<p>` element with in a particular `<div>`


## Selecting an individual element**
1. **getElementById()**

```js
document.getElementById("one")
```



2. **querySelector()**
	- like css selection
	- work on [only the first element
```js
let kk = document.querySelector("#two")

let red = document.querySelector(".yellow")
red.className = "red" //only change the first element with "yellow" class to red
```


3. **Traverse the DOM**


---
## Selecting Multiple Elements
1. **getElementsByClassName**
```js
document.getElementsByClassName("blue")
```
2. **getElementsByTagName**
```js
document.getElementsByTagName("h1")
```
1. **querySelectorAll()**
- collection of all elements



## Selecting one element from a nodeList
1. using the **item()** method
	`a.item(0)

2. Using Array syntax 
	`a[0], a[1]


---
# 8. Selecting Elements (HTML collection vs NodeList)
[Selecting multiple elements and changing properties by one instruction]
- Use for loop to apply same property for multiple elements


- **HTML collection Vs Nodelist**
	- Notice how treating HTMLCollection exactly like an array could sometimes lead to unexpected result

live update
- getElementsByClassName() and
- getElementsByTagName()


## 1. getElementsByClassName() 
- returns a ==live HTMLCollection== representing an array-like object of all child elements which have all the given class name(s)
- [ACCESSING BY REFERENCE]:  - updates and loads immediately (live)
	- even if its value is changed after its been logged - it will show on console the update value
```
location a = 7
	x = 1
location b = 2
	y = 2

```


- when trying to change the **entire** className using for loop, instead of one by one [0], [1]
```js
let elem = document.getElementsByClassName("red")
console.log(elem);

// elem[0].className = "blue" //will show the updated value from below which decreases the length of the HTML collection

for (let i=0; i< elem.length; i++) {
    elem[i].className = "blue"
}

```
- Since it if **live updating**, here is what goes on in the for loop - [It jumps one value each time
- the first element is changed
	- the second element index becomes 0 - not 1
	- so the next item to be changed will be the third element - index 1
	- making the fourth element index 1 because the 3rd element is out of the elem var and so and so fourth
- so if you have 4 elements - only 2 is changed
- if you have 2 items - only 1 is changed

- you can check it on [inspect -> Sources -> add break point and hover on the length property ] as you step over the length decreases

- ==solution is to convert to static array
	- pushing it to an empity array using for loop

```js
let temp = []
for (let i = 0; i < elem.length; i++){
    temp.push(elem[i])
}
console.log(temp);
```



## 2. getElementsByTagName()
- is also live updating
	- when you choose using getElementsByTagName and
	- change it using .textContent
```js
let myElements = document.getElementsByTagName("h1")

for (let i=0; i < myElements.length; i++) {
	const elements = myElements[i]
	element.outerHtml = `<li>${element.textContent}</li>`
}
```


```js
let elem3 = document.getElementsByTagName("li")
console.log(elem3);

// elem3[0].tag = "red"

for (let i=0; i< elem3.length; i++) {
    elem3[i].className = "h1"  /
}
```
- ==a case where this may be static is==
	- if you change the **className using getElementsByTagName** elements selection


## 3. querySelectorAll() 
- returns a static (not live) **NodeList** representing a list of the document's elements that match the specified group of selectors.
- only returns Elements




---
# 9. Selecting elements (traversing between multiple elements)
- Definition of traversing between multiple elements
	- Selecting an element from another/neighboring element.

- You can traverse from one element to another by using the following properties
	- firstElementChild
	- lastElementChild
	- parentNode
	- previousElementSibling
	- nextElementSibling

```js
let tanash = document.querySelector(".red").nextElementSibling

console.log(tanash);

let welaj = document.querySelector(".blue").parentNode
console.log(welaj);

let lj = document.getElementById("techCompanies").firstElementChild
console.log(lj);
```

```js
console.log(document.querySelectorAll(".red:nth-child(2):));
```
- STARTS FROM 1 
	- different from index



we can **traverse in three directions**
- Downards
	- firstElementChild()
	- lastElementChild()
- Upwards
	- parentElement()
	- closest()
- Sideways
	- previousElementSibling
	- nextElementSibling


---
# 10. Altering values 
# 10.1 (HTML content)
- createElement()
- appendChild()
- prepend()
- removeChild()
- textContent(), innerText
- innerHTML
- outer HTML
- after()
- before()

## Accessing => Altering a specific text node
- nodevalue
- textContent

## Working with HTML content
- when you add, update or remove an entire block of HTML code from your page
- [createElement(elem)
	- `document.createElement("p")
	- **you then have to append(newElem) or prepend(newElem) it.**
```js
let newPar = document.createElement("p")
newPar.textContent = "Here is another paragraph"

document.getElementById("sample1").prepend(newPar)

// OR you can
document.body.appendChild(newPar)
```

- [textContent
```js
let para = document.getElementById("firstPar")

para.textContent = "iPhoone"
```
- [innerText
	- `a.innerText = "Hi there`


- [innerHTML
	- `a.innerHTML = "<h2>Hi there</h2>"
	- **assigns a new HTML tag**
- [outerHTML
	- `a.outerHTML = "<p>Selam new</p>"`
	- **changes the HTML tag**


- [appendChild()
	- `document.body.appendChild(newpar)
- [prepend()
- [removeChild()
```js
let parent = document.getElementById("techCompanies")

let tobeRemoved = document.getElementById("lastElem")


parent.removeChild(tobeRemoved)
```
- **uses parent as reference point**


- [after()
```js
let referencePt = document.getElementById("micro")

let newElem = document.createElement("li")
newElem.textContent = "the Samsung Family"

referencePt.after(newElem)
```
- [before()
	- **INSERTS** an element **before or after a specific element**
- ```js
		  liElem.textContent = "Hello class";
		  let myReferenceElement = document.querySelector('#three')
		  myReferenceElement.before(liElem)
	```




---
# 10.2 (HTML attribute)
- [className
	- to change the name of a class
- [classList 
	- returns the classes in it
	- [to add new classes]
	- you can use 
		- **.add()** method in classList object - add an additional class
		- **.remove("")** to remove a specific classname
		- **.toggle("")** - if present remove it, if not add it
- ```js
  let samsungg = document.getElementById("sam")

console.log(samsungg.className)

samsungg.classList.add("yellowBg")
  ```

```js
let el = document.querySelector("#two");
console.log(el);
el.classList.add("chaltu")

// it will add the class "chaltu" in addition to "two"
<li class="yellow chaltu">Mango</li>
```
- [id 
	- to select and change id
	- `parent.id = "newID"`

- [hasAttribute()]
	- returns boolean 
	- eg. `a.hasAttribute("href") "id"`
- [getAttribute()]
	- returns the value - `"type"`
- [setAttribute()]
	- 2 argts - the attribute name and the value
	- `parent.setAttribute("class", "yellow")`
- [removeAttribute()]

```js
let samsung = document.getElementById("sam")

console.log(samsung.hasAttribute("class"))
console.log(samsung.getAttribute("class"))

samsung.setAttribute("class", "red")


imgElement.setAttribute("src", "https:/.....")
parent.appendChild(imgElement)
imgElement.setAttribute("width", "50%")
imgElement.removeAttribute("width")
```





---
# 10.3 (inline styling)
- with **style** property

- style.color
- style.font
- style.backgroundColor
- style.display
- style.border


```js
let companies = document.getElementById("techCompanies")

companies.style.backgroundColor = "yellow"
companies.style.color = "white"
companies.style.fontSize = "40px"
companies.style.border = "purple double 10px"
companies.style.display = "none"
companies.style.display = "block"
```












---
---
---
==P2
# JS Events==

1. What are JS events?
2. Events Types
3. Event Handling
4. Ways to bind an event 
	1. HTML event handlers)
	2. (traditional DOM event handlers)
	3. (DOM level event listeners)
5. Halting default behavior
6. Explaining how to approach the form validation exercise


---
---

# 1. What are JS events 
- **change caused by the actions of the client/user**

- Events in JS term are what happens on a browser when one browses
- Your job as a js developer is to write a script that responds to an event that happens on the browser. This is what makes websites interactive.
	- When one interacts with a web page, that interaction is registered as an event on the browser. In response to that event, the script that is bound with that event changes something on the web page. which creates interactivity.

- **NOTE:** one key concept to understand in here is, you prepare the scripts in response to potential events that could happen on your website.


**Manipulating DOM involves 3 steps:**
1. Finding/selecting the element we want to work with - [accessing]
2. Altering/update the text or attribute of that element - [modify]
3. Event/Action listening - determining when







---
# 2. Events Types
 * **UI / Window events**
 * **Keyboard** 
 * **Mouse** 
 * **Form Event** 


 ## 2.1 UI / Window events
   * These events occur when the user interacts with the browser's user interface (Windows)
   * load - when browser finished loading a page
   * unload - when a page is unloading
   * error - when browser encounters js error
   * resize - when changing the size of a browser
   * scroll - when user scrolls up or down

 ## 2.2 Keyboard 
 every key has equivalent number
 - keydown - when user first presses a key
 - keyup - when user releases a key
 - keypress

 ## 2.3 Mouse 
 - click - user presses and releases a button over the same element
 - dblclick - user oresses and releases a button twice
 - mouseover - user moves the mouse over an element
 - mouseout - user moves the mouse off an element 

 ## 2.4 Form Event 
 -  focus (focus in) 
	 - element gains focus (| blinks on text container)
 - blur (focus out)
	 - element loses focus/attention.
- submit 
	- user submits a form (using a button or a key)
 - change 
	 - value in select box, checkbox, or radio button changes

 - select - user selects some text in a form field
	   * (Curser related): 
	   * cut - user cuts a content from a form field
	   * paste - user pastes content into a form field
	   * copy - user copies content from a form field




---
# 3. Event Handling
 * Select element
 * Bind event
 * Attach a script (func)


### What is Event Handling
- it is the process of managing events (such as clicks, key presses or other interactions) and specifying the actions that should occur when these actions are triggered.

### Event Handlers (or Listeners)
- is a function of script that "listens" for specific event or executes predefined action when that event occurs.

### Event Binding
- is the process of associating an event with a specific function on a selected element.
	- when the event occurs, the function is executed.

## General Steps for Event Handling
1. **Select an Element**
	- Identify and choose the HTML element on which you want to handle the event.

2. **Bind an Event to the Selected Element**
	- Attach the desired event (eg. click, mouseover, keydown) to the selected element
3. **Attach an Event Listener**
	- Create and link a function that will be executed when the event is triggered on the element.






---
# 4. Ways to bind an event 

 * **HTML event handlers** 
	 - as an attribute onclick="func()"
 * **Traditional DOM event handler**
	 * Proper & broadly used
	 * its [on the JS file
	   * Select using DOM: btn.onclick = changeBackground()
 * **DOM level event listeners**
   * elem.addEventListener('click', changeBackground); — NO "on"


# 4.1 (HTML event handlers)
- Define a function on your JS that has something (event listener)
- On html file select an element and attach the function using an event attribute (select and bind)
	- Eg.
```js
// On JS file
function showClickedAlert(){
	alert("button clicked!!");
}

// On html file
<button onclick="showClickedAlert()">Save</button>

```


- this approach is considered a bad practice
- Set of attributes added to the element they should respond to an event
	- `onclick="changeBackground()"`




---
# 4.2 Traditional DOM event handlers
- You can separate your JS and HTML
- you can only attach a single function to an event

**Steps
- First, select the element you want to bind an event with
- Then bind an event with it
- Finally attach a function on the event

**Syntax**
```js
element.onevent = functionName;
```
[Notice that the event name is preceeded by "on"]






---
# 4.3. DOM level event listeners
- the favored way of handling events
- allows one event to trigger multiple functions
	- using [addEventListener]

**syntax:**
```js
element.addEventListener(event, function);
```

```js
let yesBtn = document.getElementById("yes")
yesBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
})

%% OR %%

function changeBg(){
    document.body.style.backgroundColor = "purple"

}

document.getElementById("yes").addEventListener("dblclick", changeBg)
```

```js
$(document).keypress(function(e) {
	if (e.which == 13) {
		$("#save_post").onclick();
	}
});


// MODERN WAY
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const saveButton = document.getElementById('save_post');
        if (saveButton) {
            saveButton.click(); // Standard DOM method to trigger a click
        }
    }
});
```




---
# 5. Halting default behavior
- scenarios where you want the default HTML behavior not to take effect on the browser.
- Eg. you dont want the submit button to submit the form when required filled are not filled out.
	- [usually on anchor tag - href &
	- [form tag - submitting and refreshing 

- These are the methods that you can use to stop these default HTML behaviors.
	-  **preventDefault(),** 
	 * **stopPropagation()**

	 * e.g. — not submit if not fully filled: elem.onsubmit = formSubmitHandler;




## 1. **anchor tag**
-  you can use [e] -> **usually for MouseEvent**
```js
let evaLink = document.getElementById("customLink");
console.log(evaLink)

evalink.addEventListener("click", function(e){
	e.preventDefault()
	evaLink.textContent = "Hello World"
})
```





---

# 6. Explaining how to approach the form validation exercise
## Function validation revenue
 * POST method

## 2. Form tag
- use the ==**value**== property 



```html
<form id="adder" action="#" method="POST">
      <div class="form-values">
        <p>
          First value<br />
          <input type="text" name="first-value" placeholder="First value" />
        </p>
        <p>
          Second value<br />
          <input type="text" name="second-value" placeholder="Second value" />
        </p>
      </div>
      <br />
      <button id="submitButton" type="submit">Sum and Average</button>
    </form>
    <br />
    <div id="sum">Result will be displayed here</div>
    <br />
```

==Question 4==
```js
// Write a JavaScript code which takes the values of the two fields, checks if they are number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says "Please enter numerical values only" underneath the form


let myForm = document.getElementById("adder")

myForm.addEventListener("submit", checkValidity)

function checkValidity(e){
    e.preventDefault();


    let result = document.getElementById("sum")

    let firstV = document.getElementsByName("first-value")[0].value
    let secondV = document.getElementsByName("second-value")[0].value

    if (firstV.trim() !== "" && secondV.trim() !== "" && !isNaN(firstV) && !isNaN(secondV)){
        let sum = Number(firstV) + Number(secondV)
 
        console.log(`sum is ${sum} Average is ${sum/2}`);
        result.textContent = `sum is ${sum} Average is ${sum/2}`

    } else {
        result.textContent = "please enter numerical values only"
    }
}
```




```js
e.preventDefault();
Stops the browser from reloading the page when the form is submitted, keeping the data intact.

let result = document.getElementById("sum")
Grabs the <div> element where the final answer or error message will be displayed.

let firstV = document.getElementsByName("first-value")[0].value
Finds the first input box and gets the exact text string the user typed inside it.

let secondV = document.getElementsByName("second-value")[0].value
Finds the second input box and gets the exact text string the user typed inside it.

if (firstV.trim() !== "" && secondV.trim() !== "" && !isNaN(firstV) && !isNaN(secondV)){
Ensures both inputs are not blank and contain actual numbers before proceeding.

let sum = Number(firstV) + Number(secondV)
Converts the text strings into real math numbers and adds them together.

result.textContent = sum is ${sum} Average is ${sum/2}``
Updates the text on the web page to show the calculated sum and average to the user.

} else {
result.textContent = "Please enter numerical values only"
Updates the text on the web page to warn the user that their inputs were invalid.

```





### to read the input the user typed - read the value on console, use 
```js
let aa = document.getElementById("first");

console.dir(aa);
```

on focus - bgc normal endihonena metsafiyawm temelso bado endihon











---
# Event propagation
div1 is the parent of div2 and 


```html
<div id="div1">Hi this is Div1
      <div id="div2">Hello from Div2</div>
</div>
```


```js
div1.addEventListener("click", () => alert("Div1 is clicked"))

div2.addEventListener("click", (e) => alert("Div2 is clicked"))

```
- when div1 is clicked
	- [div1 is clicked
- when div 2 is clicked
	- alert [div 2 is clicked
	- then d[iv1 is clicked



- to stop this **use e.stopPropagation()**
```js
div1.addEventListener("click", () => alert("Div1 is clicked"))

div2.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Div2 is clicked")
})

```


