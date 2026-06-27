// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.
// 1.2. Print the element itself on the console upon page refresh.
// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to select
// the content of the element


let sample = $("#sample1")
console.log(sample);

console.log(sample.text());











// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.
// 2.2. How many tech companies are listed under the ul element with an id of
// "techCompanies"?
// 2.3. Select all elements with a class of "red" and display them on the console.
// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
// 2.5. Give the newly created element a class of "blue" using jQuery
// 2.6. Append the newly created element next to the the "Sony" <li> element
// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.


let techcomp = $("#techCompanies")
console.log(techcomp);

console.log($("#techCompanies li").length);

let reds = $("#red")
console.log(reds);


let newEl = $("li").text("Facebook")
newEl.addClass("blue")

newEl.append("#techCompanies li")

let blues = $("#blue")
console.log(blues);

















// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
// 3.2. Display the result underneath the form
// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form















// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email address.
// All the fields should be labeled as required. Once the user submits, write a JavaScript function
// that checks if all the fields are provided. If not, it should show an error message above the form.
// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser