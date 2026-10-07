// // const ulElement1 = React.createElement("ul", null, null);

// // console.log(ulElement1);
// // // what you see is an {{ OBJECT }} with d/t key, property, children and more


// const ulElement = React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Abbebeebe"),
//     React.createElement("li", null, "Kebede"),
//     React.createElement("li", null, "Almi")
// )

// console.log(ulElement);

// // the last step now is to pass the created element to the ReactDOM render method so that it can add it on the DOM
// // The ReactDOM render method takes two arguments. 
//     // The react element containing the necessary info about the kind of HTML page to be created and
//     // The container element where things go

// // to see the created elements on the dom/ html page

// ReactDOM.render(ulElement, document.querySelector("#static"))






// // to see which parts dom reloads as we modify a single line of code 
// const root = ReactDOM.createRoot(document.getElementById("fromjs"))


// let fruits = ["Banana", "Mango", "Pineapple"];

// let x = 0;
// setInterval(() => {
//     fruits[0] = x % 2 == 0
//         ? React.createElement("li", { id: "red" }, "Orange")
//         : React.createElement("li", null, "Banana");

//     const test = React.createElement(
//         "ul",
//         null,
//         fruits[0],
//         React.createElement("li", null, fruits[1]),
//         React.createElement("li", null, fruits[2])

//     );

//     root.render(test);

//     x++;
// }, 2000);








5. 
// USING create-react-app

// `npx create-react-app oct22`
// - after entering our project folder oct 22 - we find everything configured