==P1
introduction to Node Modules==



1.1 Getting started with Node.js (installing and running our script on Node)
1.2 What is back-end development?
1.3 Modular structure: avoiding problems of global namespace collision
1.4 Approaches to avoid namespace collision: the IEFE Way and the CommonJS Way
1.5 Basic concept of Node module
1.6 Standards used to write Node modules: commonJS and ES6
1.7 Managing Node modules using NPM: core and contributed modules




==p2 3:00


---
# 1.1 Getting started with Node.js (installing and running our script on Node)
- you must understand what ""Modules"" are.
	- whats modular structure
	- why its needed
	- how modules are structures, and used




---
# 1.2 What is back-end development?
- Node.js is a back-end framework. But whats backend

**Backend dec** (server-side dev) - devt of logic/code that received req from clients/browsers and contains the logic to get the appropriate data from the db and send the data back to the clients/browsers. back-end dev also includes db, which includes the logic written to store data into the db for the website.

[Backend] - focuses on db, backend logic, API and servers









---
# 1.3 Modular structure: avoiding problems of global namespace collision
- Modular Structure - general design principle - SUBDIVIDES a system into smaller parts called modules, which can be INDEPENDENTLY
	- created
	- modified
	- replaced or
	- exchanged between different systems


- Namespace - place/space where name of a var/function is accessible

- Name collision - accidental overriding of the value of a var/function b/c accidentally used the same var/function in d/t places.

**Ways to avoid name collisions in js

1. Creating a Namespace using a global obj
```
	Example 1:
	var Kebede = {
		gender: "male",
		eat: function () {
		console	.log("Kebede ate");
		},
	};
	Example 2:
	var Hana = {
		gender: "female",
		eat: function () {
		cons	ole.log("Hana ate");
		},
	};
	Hana.eat(); // prints “Hana ate”
	Kebede.eat(); // prints “Kebede ate”
```


2. Wrapping your code inside braces:
```
	Example:
	(eat = () => {
		console.log("Kebede ate");
	})
	Example:
	(eat = () => {
		console.log("Hana ate");
	});
	eat(); // This will print both “Kebede ate” and “Hana ate”
```

3. using IEFE


---
# 1.4 Approaches to avoid namespace collision: the IEFE Way and the CommonJS Way
IEFE - immediately invoked function
- wrap every var and function declared in a js file inside another function thats executed on load
- produced a lexical scope using function scoping


```
{
	function(){
		console.log("Dev a")

		let x = 5;
		console.log(x);

		function addOnne(){console.log(x + 1)}
		addOne();
	}
}()
```
- inside is anonymous function

- but no FUNCTION REUSABILITY








---
# 1.5 Basic concept of Node module
- Modules - fundamental building blocks of code structure.
The module system allows you to 
	organize your code, 
	hide information, and 
	only expose the public aspect of a module by exporting.
▪ Without module systems like CommonJS, if we have JavaScript files that depend on one another, they will have to be loaded in our HTML with <script> tags.

- Before modularity, js implemented
	- function block
	- encapsulation of vars/functions in an obj
	- encapsulation of vars/func in an IIFE func to prevent global vars/functions from colliding.


**Node module** - single/multiple js files with specific functionality organized in a way that can be reused throughout the Node.js app.


**How do we access Js objects in Node?**
- node dont have the document, window and all the other objects provided by the browser. Theres no browser, window, or URL location in NodeJS.
- Instead Node has a variable called global.
	`console.log(global)`
	`console.log(global.console)`


But the global variables we declare in our code, say for example var test = "abebe", are not added to the global object as each module is wrapped by a function in Node. The ones we define in a file are only scoped in our file. They are not available outside of the file. This is because of the node Modular system.

Every file inside of node is considered a module. The functions and variables defined in that file are scoped only to that file (these functions are private).
▪ In order to be able to use the variable and function defined in a module outside of the module, we need to export it explicitly (make
it public).
▪ For the modularity to work properly, every Node application needs to have at least one module called main file. This is like the starting point of the application.

```
function minus(x,y) {
	return x-y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y){
	return x/y;
}

export default minus;
export {multiply, divide};
```

import minus, {multiply, divide} from "./sum.js"

console.log(minus(10, 7))







---
# 1.6 Standards used to write Node modules: commonJS and ES6

## **CommonJS**
- create a js file (which is a module). CommonJS follows file-based system: One file is one module. One package includes atleast one file.
`console.log(module)` has
	- id
	- exports (whats made available public)
	- filename

- node modules use wrapper functions to avoid name collision:
```
	(function(exports, require, module, __filename, __dirname){
		//entire module code here
	})
```

module.exports.fromKebe = someFunction;

connst kebe = require("./kebede.js) //IMPORTING

**Drawbacks of CommonJS standard**
- because CommonJS is not adopted by the js standard (ECMAScript), browsers dont understand it. so if you want a code in CommonJS to be executed on the browser, you need something to translate your code to the standard JS format.

These helpers are called [[Module Bundlers]

## **ES6**
- also is a file-based standard. means one file is for one module.
- using import and export keywords.

**Note**
- by default any Node.js module is treated as a CommonJS module. if we want our module to be treated as ES6 module, we have to make sure to set the file type as [["type": "module"]] in the package.json or use the [[.mjs extension]] for our file.

**Two ways**
regular export and import
```
	export {dane, eat }

	import {eat, dance } from "./myPractice.js"
```

default export/import
```
	export default newName

	import newName, { eat, dance } from "./myPractice.js"

```


**How to convert ES6 module format to CommonJS**
- use Babel: js plugin that convers ES6 to CommonJS. - converts code to backwards compatible version of js
---






---
# 1.7 Managing Node modules using NPM: core and contributed modules
- 3 types of Node modules: Core, local, and third-party/contributed modules

**Core modules**: built-in modules, come automatically when we install Node.js.
	Eg. http, fs, path, and os
	loaded into the program using the require function. var module = require('module_name')

**Third-party/Contributed modules**: available online using npm. can be installed in project folder/globally.
	Eg. mongoose, express, angular and react

**Local Modules**: modules you create locally in your Node.js application.


**Most used core Node Modules**
fs: handle file/directory system
	- create folder, assess and open a file
	- edit, copy and remove a file
os: provide info abt computers operating system
	- name of host computer
	- right network info of the computer
path: includes methods to deal with file paths.
	- identfy the path of specific file/folder
	- identify path to the root diretory
	- identify extension of a file
http: creates http server in Node.js
	- ability to receive and handle HTTp requests, which involves understanding the request methods and status code
	- managing connections
events: used to own and trigger events
	- create, fire, and listen to your own events
	- attach/detach one/more event listeners to the names event
	- manage asynch req using event loop


-













---

---


==P2
Web servers==

2.1 Introduction: core node modules
2.2 Most common core Node modules (fs, os, path, http)
2.3 Building HTTP web server using HTTP module: 
	defining a web server and listener
	2.4 Building HT TP web server using NodeJS: serving a simple message using HTTP module
	2.5 Building HTTP web server using HTTP module: serving static files with HTTP
	2.6 Building HTTP web server using HTTP module: serving our static Apple website with HTTP
2.7 Building HTTP web server using Express module: serving our static Apple website with Express


---
# 1. Introduction: core node modules
- fs
- os
- path
- http
- events






---
# 2. Most common core Node modules (fs, os, path, http)

- remember to always import(require) any core Node module to yur local module before you use it.

## Getting ifnormation from our OS


## Getting detail location info about a file
- use tha "path" module
	- method we use often is the parse() method.

- the parse  method takes some "path" as an argument and returns an object.
The returned object will have these five properties
	- dir
	- root
	- base
	- name
	- ext




## Dealing with files
- use fs module

Eg. read a file thats on the server
- readFileSync
	- takes 2 argt - the file to read, the encoding method used
- writeFileSync
	- takes 2 argt - the file to write on, the content to write






---
# 3. Building HTTP web server using HTTP module
## 3.1 Defining a web server and listener
- you can create a server that listens for incomming HTTP requests and responds with data, such as:
	- static files (HTML, CSS, JS, images)
	- JSON, or
	- Text

- A web server is a computer with a sw installed on it to handle HTTP requests.
	- the computer that stores the files - File server
	- te sw that handles the http req - http server

- we can build an http web server using Node.js as the sw that manages the http req

- Handling http req means: we need a listener that listens to http req sent to the server and does sth with it
- **listener** is an object that executes some code when triggered by an event.




---
## 3.2 Serving a simple message using HTTP module


---
## 3.3 Serving static files with HTTP


---
## 3.4 Serving our static Apple website with HTTP


---
# 4. Building HTTP web server using Express module: serving our static Apple website with Express


