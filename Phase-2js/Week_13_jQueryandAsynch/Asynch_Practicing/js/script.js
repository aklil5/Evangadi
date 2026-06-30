// Synchronous Programming


console.log("start");

function delay(seconds) {
    const start = Date.now();
    let x = true;
    while(x) {
        const current = Date.now();
        if (current - start >= seconds * 1000){
            console.log("hi");
            x = false;
        }
    }
}

delay(5);
console.log("Doing something completely unrelated to the timer above");


// OUTPUT
// start
// hi
// Doing something completely unrelated to the timer above






// ==========================================
// ===========================================
// Asynchronous Programming

console.log("task1");
setTimeout(() => console.log("task2"), 2000)

console.log("Task3");

// OUTPUT
// task1
// Task3
// task2