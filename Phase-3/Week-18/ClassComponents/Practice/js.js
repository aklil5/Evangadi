
// 1. Creating objects in JS using constructor function

// Constructor function

function PersonF(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        return `Hello, my name is ${this.name} from group ${this.group}`
    }
}


// Object created using the constructor function
let Abe = new PersonF("A lmaz", 1)


console.log(Abe);

// ----
// 2. Traditional way of property inheritacne in JS (using prototype object)

PersonF.prototype.hello = "Olla"
PersonF.prototype.getName = function() {
    return this.name;
}
PersonF.prototype.batch = "June 2024";

// console.log(Abe);
console.log(Abe.getName);

// These can then be found in Prototype in the Console.



// For ANIMAL
function Animal (name, test) {
    this.name = name;

    this.test = test;
    this.sayHello = function(){
        console.log("Hello, my name is " + this.name);
    }
}

var animal = new Animal("Generic Animal", "hi")
// console.log(animal);
animal.sayHello();

function Dog (name, breed) {
    Animal.call(this, name);  // calling the Animal constructor (will include name, test and sayHello) 

    this.breed = breed
}

// establish the prototype chain for ..., so it INHERIT from Animal
Dog.prototype = Object.create(Animal.prototype)
// Fixes the constructor reference for Dog
Dog.prototype.constructor = Dog
console.log(Dog);










// 3. ES6 way of property inheritance in JS (concept of CLASS)
class Person{
    Constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.info = function(){
            return `${this.name} is ${this.age} years old`
        }

        // all the above will be found inside Person() => Constructor
    
    }
    info() { 
            return `${this.name} is ${this.age} years old`
        }

    // you can add methods in here now
    getName(){
        return this.name;
    }

    // the above 2 will be found in Person{} in Console
}

const almaz = new Person("Almaz", 33, "F");
console.log(almaz);











// 4. ES6 way of property inheritance in JS (concept of CLASS INHERITANCE)

// EXTENDS and
// SUPER method

class Student extends Person{
    constructor(grade, dept, name, age){
        super(name, age);
        this.grade = grade;
        this.dept = dept;
    }
}

const someStudent = new Student("A", "CS", "Abebe", 33)
console.log(someStudent);
// In the console we see
    // - Student{}
        // - Person{}
            // - Object{}





// ---
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(){
        let date = new Date();
        let carAge = date.getFullYear() - this.year;
        return carAge;
    }
}

let myCar = new Car("Ford", 2016);
// console.log(myCar);
// console.log(myCar.age());


class Model extends Car{
    constructor(name, year, model) {
        super(name, year);
        this.model = model;
    }
    carInfo() {
        return `This is ${this.age()} year old ${this.name} ${this.model}`
    }
}

let newModel = new Model("Toyota", 2020, "Camry")
console.log(newModel);
console.log(newModel.age());














// 5. Array and object destructuring
// ## Array Destructuring
let a = [10, 20, 88]

let [b, c] = [10, 20];
console.log(b )


// ## Object Destructuring
const user = {
    id: 42,
    is_verified: true,
}

const { id, is_verified } = user; 
















// 6. Class based components: converting functional components into class components

// import React, { Component } from "react"

class App extends Component {
    render() {
        return (
            <h1>helo</h1>
        )
    }
}











// 7. React prop



