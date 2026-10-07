
// CREATING ELEMENT USING VANILLA JS

// //  Using Vanilla JS

// // a place to append the HTML elements we create
const containerElement = document.querySelector("#fromjs")

// // list of items to create
const listOfItems = ["Abebe", "Kebede", "Almaz"]

// // create the ul element first
const ulElement = document.createElement("ul")

// // create li elements for each items
listOfItems.forEach((item) => {
    const listElement = document.createElement("li");
    listElement.innerText = item;
    ulElement.appendChild(listElement);
})

// console.log(ulElement);

// // Append the created element on the HTML body
containerElement.appendChild(ulElement);


let fruits = ["Banana", "Mango", "Pineapple"];

let x = 0; 

setInterval(() => {
    fruits[0] = x % 2 == 0 ? "Orange" : "Banana";

    let cssClass = fruits[0] == "Banana" ? "yellow" : "orange";

    document.getElementById("fruits-list").innerHTML = `
        <ul>
            <li class="${cssClass}">${fruits[0]}</li>
            <li>${fruits[1]}</li>
            <li>${fruits[2]}</li>
        </ul>
    `;

    x++;
}, 5000);




// The whole div updates even though we asked it to update the first "li" element.
// After learning states we'll see how react can fix this because of virtual DOM.