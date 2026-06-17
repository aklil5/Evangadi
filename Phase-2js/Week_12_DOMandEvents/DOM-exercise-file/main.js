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




// =====================================
// Form Validation

let nameCheck = document.getElementById("adder")

nameCheck.onsubmit = formSubmitChecker;

function formSubmitChecker(e){
    

    let errors = [];

    let elErrorsDisplay = document.getElementById("errorsDisplay");
    elErrorsDisplay.innerHTML = "";
    

    let elFirstName = document.getElementsByName("first-value")

    let elAnotherName = document.getElementsByName("second-value");

    let firstNameVal = elFirstName[0].value
    let secondNameVal = elAnotherName[0].value
    
    if (!firstNameVal) {
        errors.push("First value is empty")
    } else if (secondNameVal.length < 7) {
        errors.push("second val not > 7 characters.")
    } else {

    }

    
    if (errors.length > 0) {
        e.preventDefault();
        elErrorsDisplay.style.display = "block"
        for (let i = 0; i < errors.length; i++) {
            elErrorsDisplay.innerHTML += errors[i] + "<br>";
        } else {
            alert("Submitted")
        }

    }
}