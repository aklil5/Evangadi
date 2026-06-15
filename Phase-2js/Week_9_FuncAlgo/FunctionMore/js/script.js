
// function checkUserPlan(userPlan){
//     if (userPlan == "Free" || userPlan == "Pro" || userPlan == "Enterprise") {
//         if (userPlan == "Free") {
//             console.log("You have limited access")
//         } else if (userPlan == "Pro"){
//             console.log("you have advanced access")
//         } else {
//             console.log("You have full access")
//         }
//     } else{
//         console.log("Please enter either Free, Enterprise, or Pro")
//     }
    
// }

// // checkUserPlan("aklile")

// function analyzeTaskPriority(deadline, importance, estimatedHours){
//     if (deadline == "near" && importance == "high") {
//         return "CRITICAL"
//     } else if (importance == "medium" && estimatedHours == "okay") {
//         return "NORMAL"
//     } else {
//         return "LOW PRIORITY"
//     }
// }
// console.log(analyzeTaskPriority("near", "high"))



// // ===================================
// function doSomething(){
//     console.log("Doing something....")
// }

// let result = doSomething();
// console.log(result);


let area = (width, height) =>  width * height;
console.log(area(2, 8))



// ==== >>>??
function maskEmail(email) {
  const [localPart, domain] = email.split("@");
  const firstLetter = localPart[0];
  const lastLetter = localPart[localPart.length - 1];
  const maskedMiddle = "*".repeat(Math.max(0, localPart.length - 2));
  return `${firstLetter}${maskedMiddle}${lastLetter}@${domain}`;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

