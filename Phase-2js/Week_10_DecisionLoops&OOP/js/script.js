// let studentsGrade = [12, 89, 90, 78, 5, 10]

// for (let i = 0; i < studentsGrade.length; i++){
//     console.log(`${i} element: ${studentsGrade[i]}`)
// }


// console.log();


// =====================================
// add up until a number

// function sum(a) {
//     if (isNaN(a)){
//         console.log("pls enter a number");
//     } else if (a < 0) {
//         console.log("pls enter a positive number");
//     } else {
//         let total = 0;
//         for (let i = 1; i <= a; i++){
//             total += i;
            
//         }
//         return total;
//     }
// }

// console.log(sum(7))
// console.log(sum(1))
// console.log(sum(600))




// ======================================
// outerLoop: for (let i = 0; i < 3; i++) {
//   innerLoop: for (let j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       break outerLoop;
//     }
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }




// ===================OOP

// let myCar = {
//   name: "Deluxe",
//   model: 500,
//   color: "red",

//   start: function() {
//     return "start my " + this.name;
//   }
// }

// console.log(myCar.start());


function Person(first, last) {
	this.firstName = first, //this.property = argt
	this.lastName = last,
	
	this.fullName = function(){
		return this.firstName + " " + this.lastName;
	}

}

console.log(new Person("abe", "kebe"))