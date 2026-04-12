# Basics of HTML 🔥
Created on: 10/10/17 E.C

Topics: Basics of HTML




----

# HTML - Hyper Text Markup Language
- Tim suggested to CERN in 1989

	- Hypertext - link that connect different pieces of text or other resources
	- Markup - labeling paragraph, link, section, 

## Introduction to HTML
- Regardless of how complex a website is, it is still built with HTML, the basic building blocks of the web. The frameworks used to build websites are HTML and CSS. When it comes to building websites, you'll be much better off if you understand how they interact.
## Understanding HTML
### What is HTML?
- It is just a standard system of tagging a text file
	- An HTML tag is **a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document**.
- A text file that is "tagged" following the "[HTML standard]" is called an:
	- HTML document
- Both web developers and web browsers follow this standard to generate expected outcomes.

## HTML versions
- HTML has 5 versions so far, ranging from HTML 1.0 to the most recent, HTML 5.

### DOCTYPE
- DOCTYPE is not an HTML tag. It is simply an instruction for your browser to tell which version of HTML your document is using.
- DOCTYPE declarations:
	- For HTML 5, use `<!DOCTYPE html>`
	- for HTML 4, `<!DOCTYPE HTML PUBLIC>`
- HTML5 is 
	- simplified, 
	- has better error handling ways
	- includes multimedia elements
	- includes <span style="color:rgb(255, 192, 0)">semantic </span>content by including `<header> <footer> <article> <section> and <figure>`

### Why learn HTML
- Primary goal of learning HTML is to understand how to properly tag your text documents so that the browser understands what you are attempting to accomplish. whether you the text is title, paragraph.....


----
# Basic rules of html tags
- tags provide a web browsers with instructions about the type of texts included in the html document. they are hidden keywords within a web page that specify how your browser should format and display the content.
1. tags are always enclosed in angle brackets
2. Tags usually come in pairs: an opening and a closing tag
3. A few tags are called non-container tags 
	- `<br>`
	- `<hr>`
	- `<img>`
4. Tags are comprised of elements (tag + content inside) and attributes (inside opening tag)
	- `<img src="" width="" height="" alt=""`
	- `<a href=""> </a>`

The basic skeleton of every web page looks like this:
```html
<html>
	<head>
		<title></title>
	</head>
	<body>
	</body>
</html>
```

- The first tag in any HTML file is the `<html>` tag. this tells web browser that the document is an HTML file.
- The second tag is the `<head>` tag. Information between the `<head>` tags, called [meta information], don't appear in the browser window but are still important. The most important meta information in the HEAD tag is the `<title>` tag. Generally, the title should reflect the contents of the page.
- The true content of your web page is included inside the `<body> tag.`
-----
 ==========HELLO WORLD DAY========
# Build your first HTML page
## Steps to create an HTML page (.html)
1. Always create a folder for every project you work on
2. Open the folder using your editor (VS)
	- Open new window - Drag and Drop your folder
3. Create an HTML document
4. Define the DOCTYPE `<!DOCTYPE html>`
5. Include the initial HTML5 boilerplate
	- HTML boiletplate is the standard template code used when building HTML pages. 
	- How to add HTML boilerplate in VSC
		- type "html" in your .html file and select html5 from the list Emmet suggest
		- strike "!" key then press "Enter" or "TAB" 

```html
<!DOCTYPE html>
<html>
	<head> 
		<meta> - info about this page like when you google it
		<title> </title> - shown on the tab
	</head> //more info about this html documnet
	<body> </body> everything to be displayed

</html>
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<header>
			<h1></hi>
			<nav>
				<ul>
					<li></li>
					<li></li>
				<ul>
			</nav>
		</header>
		<section>
			<div></div>
		</section>
		<section>
			<div></div>
		</section>
		<footer>
		
		</footer>
	</body>
	
</html>
```




---

# Most commonly used HTML5 tags
- Structural Tags
	- html 
	- head
	- body
	- header
	- nav - like compass
	- section
	- div
	- h1 to h6
	- a
	- p
	- br
	- hr
	- footer
- Metadata Tags
	- link
	- style
	- title
	- meta
- Form Tags
	- form
	- input
	- textarea
	- button
- Formatting Tags
	- b
	- center
	- em
	- small
	- strong
	- sup
- List Tags
	- ul
	- ol
	- li
- Scripting Tags
	- script
- Embedded Content Tags
	- img
	- video
	- iframe

## Commenting on HTML
	- `<!-- Comments -->`


# Building Apple's terms and policy page in class

===========================================================

==P2===
# Introduction
- Attention to detail is the key for HTML
- Make sure you formatter (prettier) works and your setting Format on Save is ON  
	- it **corrects** issues related to code style and formatting, such as indentation, spacing, and line breaks.

# Steps to create an HTML Page


- Commonly used HTML Tags List
	- Special focus
		- Meta tag
			- For crowler - Gogle crowler????????????????
			- og = open grasp facebook property - only for when you share it on facebook
		- nav
		- anchor tag
			`<a href="" target="_blank" (opens link in newtab) _parent///////////>
			- href - can be link or address to another html
			- target ////////////////////////////
		- Lists (ul & ol)
		
	- wrappers
		- header
		- section
			- div - division
		- footer
		
		- headings (h1 - h6)
		
		- img tag
		- attributes
			- src - 
				- link
				- full path - (absolute path)
					- <span style="color:rgb(255, 192, 0)">u can drag and drop the picture to browser to find its RELATIVE PATH</span>////////TRYYYYY
				- relative path is recommended
					- same folder - ./ folder OR the folder name 
					- folder outside - ../ - 1 folder or ../../ - 2 folders
			- alt
				- alternative text
		
		- form
			it has `action=""` property - backend
			- label 
				- for=""
			- input element 
				- type="text" - default
				- type="password" - hidden `******`
				- type="color" - to choose from color
				- type="file" - Choose file
				- type="date"
				- type="submit" => as a button
				- placeholder = "Enter your email address"
			- text area element - wider
				- name
				- id
				- cols and rows
			- button element 
				- type="submit"
				- `<button type="Submit"> Agree and join </button>`
		- video
			- width="" height="" controls(play pause features included) attributes
			- `<source src="" type="video/mp4 videos/movie.mp4"//////////////////////`
		- iframe - inline frame
			- including another page in your page with a given height and width//////////////////////// MORE
			- embed video from youtube
			- src=
![[Pasted image 20250708095019.png]]
	

