//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻

// var document = {
//     html: {
//         head: {
//             title: {
//                 value: "The title"
//             }
//         }
//     }
// }
// console.log(document.html.head.title.value); //The title

// document.html.head.title.value = "Another title"

// console.log(document.html.head.title.value); //Another title


// let red = document.getElementById("one")

// console.log(red)


// let blue = document.querySelector(".red");
// blue.className = "blue"


// console.log(document.querySelectorAll(".red"));



// let elem = document.getElementsByClassName("red")
// console.log(elem);  //length of 4 before elem[0] className was changed, after that length is 3

// // elem[0].className = "blue"  

// for (let i=0; i< elem.length; i++) {
//     elem[i].className = "blue"
// }



// Solution to the live updating is changing it to static array
// let temp = []
// for (let i = 0; i < elem.length; i++){
//     temp.push(elem[i])
// }
// console.log(temp);









// let el3 = document.getElementsByTagName("li")
// console.log(el3) // length dont change after the change of the first el3 className

// el3[0].className = "red"


// let elem3 = document.getElementsByTagName("li")
// console.log(elem3);

// // elem3[0].tag = "red"

// for (let i=0; i< elem3.length; i++) {
//     elem3[i].tagName = "h1"  // is it.className or .tagName
// }

// getElements byTagName is also live updating
// let myElements = document.getElementsByTagName("h2")

// // for (let i=0; i < myElements.length; i++) {
// // 	const elements = myElements[i]
// // 	elements.outerHtml = `<li>${elements.textContent}</li>`
// // }
// console.log(myElements);





// // ===================================
// // Traversing between multiple elements


// let tanash = document.querySelector(".red").nextElementSibling

// console.log(tanash);

// let welaj = document.querySelector(".blue").parentNode
// console.log(welaj);

// let lj = document.getElementById("techCompanies").firstElementChild
// console.log(lj);



// =====================================



// let para = document.getElementById("firstPar")

// para.textContent = "iPhoone"


// let newPar = document.createElement("p")

// newPar.textContent = "Here is another paragraph"

// document.getElementById("sample1").prepend(newPar)


// let liEml = document.createElement("li")
// liEml.innerText = "Avocado"

// document.getElementById("techCompanies").prepend(liEml)


// let parent = document.getElementById("techCompanies")
// let tobeRemoved = document.getElementById("lastElem")

// parent.removeChild(tobeRemoved)



// let referencePt = document.getElementById("micro")

// let newElem = document.createElement("li")
// newElem.textContent = "the Samsung Family"

// referencePt.after(newElem)



// let samsungg = document.getElementById("sam")

// console.log(samsungg.className)

// samsungg.classList.add("yellowBg")

// console.log(samsungg.className)

// samsungg.classList.toggle("yellowBg")

// samsungg.classList.toggle("yellowBg")

// let samsung = document.getElementById("sam")

// console.log(samsung.hasAttribute("class"))

// console.log(samsung.getAttribute("class"))

// samsung.setAttribute("class", "red")


let companies = document.getElementById("techCompanies")

companies.style.backgroundColor = "yellow"
companies.style.color = "white"
companies.style.fontSize = "40px"
companies.style.border = "purple double 10px"
companies.style.display = "none"
companies.style.display = "block"





























// ============================================
// Ways to Bind an event
// 1. HTML event handlers


// function alertMes(){
//     alert("hi there clicker")
// }

function changeBg(){
    document.body.style.backgroundColor = "purple"
}

function removeBG(){
    document.body.style.backgroundColor = ""
}

// let yesButton = document.getElementById("yes")
// yesButton.onclick = changeBg

// yesButton.ondblclick = removeBG


// document.getElementById("yes").addEventListener("dblclick", changeBg)



// yesBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "green"
// })

// let linkedTag = document.getElementById("nextSite")

// linkedTag.addEventListener("click", function(e) {
//     e.preventDefault()
//     linkedTag.textContent = "Not loading the new site, but showing you some text."
// })




// ==================================================
// ===================================================
// Form Validation


// pseudo code for function

// - use VALUE property to find entered value
    // if empty, add to the error array
// use innerHTML on errorsDisplay

// do the same for the other values

// if error is empty - submit
// else stop default behavior using preventDefault()
//  iterate through error array and display each message on the errorsDisplay





// *********************************************************************
// FIRST FORM

// let form = document.getElementById("registration-form")
// form.onsubmit = formSubmitChecker

// function formSubmitChecker(e){
//     var errors = [];

//     let errorsDisplay = document.getElementById("errorsDisplay");
//     errorsDisplay.innerHTML = "";


//     let valOne = document.getElementsByName("first-name")[0];
//     let valTwo = document.getElementsByName("password")[0];

//     let val1 = valOne.value;
//     let val2 = valTwo.value;

    


//     if (!val1) {
//         errors.push("First name field is required.")
//         valOne.style.backgroundColor = "pink"
//     }
//     if (!val2) {
//         errors.push("Password is empty")
//         valTwo.style.backgroundColor = "pink"
//     } else if (val2.length < 5) {
//         errors.push("Passwords not strong enough")
//         valTwo.style.backgroundColor = "pink"
//     } 


//     if (errors.length > 0) {
//         e.preventDefault()
//         errorsDisplay.style.display = "block";
//         for (let i = 0; i < errors.length; i++) {
//             errorsDisplay.innerHTML += errors[i] + "<br>";
//         }
        
//     } else {
//         alert("Submitted");
//     }

// }












// **************************************
// SECOND FORM

let form = document.getElementById("adder")
form.onsubmit = formSubmitChecker

function formSubmitChecker(e){
    var errors = [];

    let errorsDisplay = document.getElementById("errorsDisplay");
    errorsDisplay.innerHTML = "";


    let valOne = document.getElementsByName("first-value")[0];
    let valTwo = document.getElementsByName("second-value")[0];

    let val1 = valOne.value;
    let val2 = valTwo.value;


    if (!val1) {
        errors.push("first value is empty")
        valOne.style.backgroundColor = "red"
    }
    if (val2.length < 5) {
        errors.push("second value is very short")
        valTwo.style.backgroundColor = "red"
    }


    if (errors.length > 0) {
        e.preventDefault()
        errorsDisplay.style.display = "block";

        for (let i = 0; i < errors.length; i++) {
            errorsDisplay.innerHTML += errors[i] + "<br>";
        }
        
    } else {
        alert("Submitted");
    }

    

}

let aa = document.getElementById("first");
console.dir(aa);









// ================================================================================
// Third Form

// let form = document.getElementById("formID")


// function checkValidity(e) {
//     e.preventDefault();
    
//     let myInput = document.querySelectorAll("#formID input");
    
//     if (myInput[0].value.length == 0) {
//         myInput[0].style.backgroundColor = "pink"
//     }
//     if (myInput[1].value.length == 0) {
//         myInput[1].style.backgroundColor = "pink"
//     }
//     if (myInput[0].value.length !== 0 && myInput[1].value.length !== 0) {
//         // Normally treated as strings
//         let outPut = myInput[0].value + " " + myInput[1].value;

//         // if you want to treat them as numbers
//         // let outPut = Number(myInput[0].value) +  Number(myInput[1].value);

//         let result = document.getElementById("result");
//         result.textContent = outPut
//     }

// }

// form.addEventListener("submit", checkValidity)





// Different Backgrounds
let button1 = document.getElementById("b1")
button1.onmouseover = changeBG

function changeBG(){
    document.body.style.backgroundColor = "yellow"
}

function toggle() {
    if (document.body.style.backgroundColor === "purple") {
        document.body.style.backgroundColor = ""
    } else {
        document.body.style.backgroundColor = "purple"
    }
    
}


var b3 = document.getElementById("nightmode");
// console.log(el);
b3.addEventListener("click", nightmode);

function nightmode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white"

}




// *******************************************************************
// EVENT PROPAGATION

let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")

div1.style.backgroundColor = "green"
div1.style.height = "400px"
div1.style.width = "400px"


div2.style.backgroundColor = "yellow"
div2.style.height = "200px"
div2.style.width = "200px"



div1.addEventListener("click", () => alert("Div1 is clicked"))

div2.addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Div2 is clicked")
})


