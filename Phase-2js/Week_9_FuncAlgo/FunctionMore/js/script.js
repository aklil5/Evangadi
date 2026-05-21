
function checkUserPlan(userPlan){
    if (userPlan == "Free" || userPlan == "Pro" || userPlan == "Enterprise") {
        if (userPlan == "Free") {
            console.log("You have limited access")
        } else if (userPlan == "Pro"){
            console.log("you have advanced access")
        } else {
            console.log("You have full access")
        }
    } else{
        console.log("Please enter either Free, Enterprise, or Pro")
    }
    
}

// checkUserPlan("aklile")

function analyzeTaskPriority(deadline, importance, estimatedHours){
    if (deadline == "near" && importance == "high") {
        return "CRITICAL"
    } else if (importance == "medium" && estimatedHours == "okay") {
        return "NORMAL"
    } else {
        return "LOW PRIORITY"
    }
}
console.log(analyzeTaskPriority("near", "high"))