// // // Synchronous Programming


// const studentName = "Abebe";
// const greeting = `Hello, my name is ${studentName}!`;
// console.log(greeting);

// Each line is executed synchronously






 

// console.log("start");

// function delay(seconds) {
//     const start = Date.now();
//     let x = true;
//     while(x) {
//         const current = Date.now();
//         if (current - start >= seconds * 1000){
//             console.log("hi");
//             x = false;
//         }
//     }
// }

// delay(5);
// console.log("Doing something completely unrelated to the timer above");


// // OUTPUT
// // start
// // hi
// // Doing something completely unrelated to the timer above






// ==========================================
// ===========================================
// // Asynchronous Programming

// console.log("task1");
// setTimeout(() => console.log("task2"), 2000)

// console.log("Task3");

// // OUTPUT
// // task1
// // Task3
// // task2











// ===============================================
// // CALLBACK


// // ==================================
// let x;
// function greet(sec){
//     setTimeout(() => {
//         x = "Hello"
//         console.log("hi from setTimeout");
//     }, sec)
// }

// greet(2000);

// console.log("hi");

// console.log("selam new");

// console.log(x);


// // // OUTPUT
// // hi
// // selam new
// // undefined
// // hi from setTimeout




// // ==================================

// function orderPizza (callback){
//     console.log("order pizza");
//     setTimeout(() => {
//         const pizza = "🍕"
//         console.log(`Your ${pizza} is ready`);
//         callback(pizza);  // executes (calls) the function you passed in as an argt
//         // callback is just a placeholder for "pizzaReady" -> js translates it to pizzaReady("\/\/")

//     }, 2000);
// }

// function pizzaReady(pizza) {
//     console.log(`Eat your ${pizza}`);
// }

// orderPizza(pizzaReady);

// console.log("call a friend");

// OUTPUT
// order pizza
// call a friend
// your \/\/\/ is ready
// eat your \/\/\/










// =======================================
// PROMISE

// console.log(fetch("https://randomuser.me/api"));


// fetch("https://randomuser.me/api")
//     .then((res) => res.json())
//     .then((data) => console.log(data.results[0]))
// // will return the first object from the api



// fetch("https://randomuser.me/api").then(function(res){
//     console.log(res);
//     return res.json()
// })
// will return Response object



// ===============================
// fetch("https://randomuse.me/api")
//     .then((res) => res.json())
//     .then((data) => console.log(data.results[0]))
//     .catch((err) => console.log("Something went wrong>>>", err));



// let myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         reject(10);
//     }, 3000);
// });

// myPromise.catch(function (result) {
//     return result * 2;

// // code below is same as the returned value above
//     return new Promise(function (resolve, reject) {
//         // resolve (result * 2);
//     });
// })

// .catch(function (returnedResult) {
//     console.log(returnedResult); //prints nothing
// }).then(function (returnedResult) {
//     console.log(returnedResult); //Prints 20
// })


// // Prints 20






// let myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(10);
//     }, 3000);
// });
// myPromise.catch(function (result) {
//     throw new Error(result * 3);
// // new Promise below is same as the above thrown value
//     // return new Promise(function (resolve, reject) {
//     // reject(result * 3);
// // });
// }).then(function (result) {
//     console.log(result); //nothing prints here
// }).catch(function (result) {
//     console.log(result); // prints 30
// });









// Async Await
// ==============================================
// async function logData(){
//     try{
//         let response = await fetch("https://randomuser.me/api");
//         console.log(response);
//         let data = await response.json();
//         console.log(data);
//         const user = data.results[0];
//         console.log(user);
//     } catch(error){
//         console.log(error, "tebelashe eko");
//     }
// }

// logData()








// =============================================
// Promise constructor function

// let test = new Promise((resolve, reject) => {
//     resolve("hi class");
//     reject("it's broken")
// })

// console.log(test);









// let myPromise = new Promise((resolve, reject) => {
//     const condition = true;

//     if(condition) {
//         resolve("Here is the data from YouTube DB");
//     } else {
//         reject("Sorry, couldn't get data")
//     }
// })

// console.log(myPromise);

// *****************
// // TO ACCESS THE RESULT

// myPromise
//     .then((data) => console.log("Data >>> ", data))         //Data hi class
//     .catch((err) => console.log("Error >>> ", err));         // Error >>> it's broken







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

// alarm("aki", 5000)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// // Or another way

// async function getUp() {
//     try {
//         let data = await alarm("bob", 2000)
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUp();



// async function displayData(){
//     try {
//         let response = await fetch("https://randomuser.me/api")
//         console.log(response);

//         let data = await response.json()
//         console.log(data);

//         const user = data.results[0]
//         console.log(user);

//         // // Create HTML elements to display user data
//         const userContainer = document.getElementById("user-container");
//         userContainer.innerHTML = `
//             <img src="${user.picture.large}" alt="User Picture">
//             <h3>Name: ${user.name.last}</h3>
//             <h3>Email: ${user.email}</h3>
//             <h3>Location: ${user.location.city}, ${user.location.country}</h3>
//         `;
//     } catch (error) {
//         console.log(error);
//     }
// }
// displayData()




// let abebe = () => {
//     console.log("Almaz")
// }


// console.log("Abebe")
// console.log("Kebede")
// setTimeout(abebe, 0);
// console.log("Challa")


let promise = new Promise(function(resolve, reject){
	if(true){
		resolve("Abebe")
	}
	if (1==1) {
		reject("Weyneee")
	}
})
console.log(promise);