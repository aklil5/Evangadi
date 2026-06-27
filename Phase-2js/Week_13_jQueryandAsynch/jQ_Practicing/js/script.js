// let elem = $("#adder")
// console.log(elem);

// let inputLists = $("#formID input")
// console.log(inputLists);

// inputLists.first().css("background-color", "pink")

// // $("input").last().hide()
// $("input:last").hide()
// // $("input:last").show()

// $("input:visible").css("background-color", "green")
// $("input:even").css("background-color", "purple")


// // inputLists.last().empty()



// // let classs = $(".form-values")

// // $("p:nth-child(2)").hide()

// $("p:nth-child(2)").has("input")
// $("p:contains('First value')").css("background-color", "pink")

// $("button[id=submitButton]").hide()


// $("#adder div").text("helo") 

// let a = $("p").text("adada")

// console.log(a)


// let aa = $("#adder").html("<li>tungtung</li>")
// console.log(aa);

// let inputs = $("#formID")
// inputs.prepend("<input placeholder='first of all'>")


// let htt = $("h2[id=result]").html()
// console.log(htt);


// $("h2").remove()

// $("h2").empty()


// $("#second").before("<label>here you insert the second value</label><br>")


// $("#app").addClass("yellow")
// $("#samsg").addClass("purple")

// $("#chinese").addClass("red")
// $("#huawe").addClass("blue")

// $("#korean").addClass("green")

// $("#app").removeClass("yellow")



// $("#samsg").css("background-color", "pink")


// $("#samsg").css({
//     "background-color": "violet",
//     width: "300px",
//     color: "white"

// })


// let ff = $("#second").val("1223")
// console.log(ff);


// $("#app").attr("class")


// $("li").css("background-color", "pink")


// console.log($("#second").val())


// console.log(isNumeric("hi"))
// console.log($.isNumeric("4"))


// $("li").css("background-color", "pink")

// $("ul").find("li").css("background-color", "pink")

// console.log($("li").parents())

// $("ul").children().css("height", "200px")
// $("li").parent().css("background-color", "pink")
// $("li").parent().css("background-color", "pink")


// $("#samsg").next().css("background-color", "yellow")
// $("#samsg").nextAll().css("background-color", "yellow")

// $("#samsg").prev().css("background-color", "red")

// $("#chinese").prevAll().css("background-color", "pink")


// $("ul").find("li").css({"border": "2px solid green"})

// let parent = document.querySelector("#lists")
// let child = document.getElementById("samsg")

// console.log($.contains(parent, child));




// console.log($("ul").has("li").css({"border": "5px solid pink"}))





// ***************************************************
// HANDLING EVENTS


// $(document).ready(function() {
//     $("body").css('background-color', "red")
// })



// - click()
// TWO WAYS
// $("#showList").on("click", hideElement)
// function hideElement(){
//     $("#lists li").hide()
// }

// $("#showList").click(function(){
//     $("#lists li").hide()
// })




// // - dblclick()
// $("#app").on("click", () => $("#app").css("border", "6px solid pink"))


// // - mouseenter()
// // - mouseleave()
// // MULTIPLE EVENTS - ONE ACTION
// $("#korean").on("mouseenter mouseleave", function() {
//     alert("hovering on SOUL!!")
// })


// - mousedown()
// - mouseup()
// MULTIPLE EVENTS _ MULTIPLE ACTIONS
// $("#samsg").on({
//     mousedown: () => $("#samsg").css("background-color", "pink"),

//     mouseup: () => $("#samsg").css("border", "3px, solid, yellow"),

//     click: () => $("#samsg").css("background-color", "green")
// })



// $("#result").click(function () {
//     $(this).hide()
// } )


// - you can do multiple event 1 action or
// - multiple event multiple action

// $("#formID").on("submit", function(e){
//     e.preventDefault();
//     let firstValue = $("#first").val();
//     let secondValue = $("#second").val();

//     console.log("first value is: " + firstValue)
//     console.log("second value is: " + secondValue)
// })

// // - hover()
// // - focus()
// // - blur()

// $("#first").on({
//     focus: function(){
//         $(this).css('background-color', 'green')
//     },

//     blur: function(){
//         $(this).css('background-color', 'pink')
//     }
// })

// $("#sum").hover(function() {
//         $(this).css('background-color', 'yellow')
// })













// $("#fruits").click(function(){
//     $("#listsOfFruits").toggle()
// })


// $("#fruits").click(function() {
//     $("#listsOfFruits").slideUp()
// })

// $("#fruits").click(function() {
//     $("#listsOfFruits").slideToggle()
// })

// $("#fruits").click(function() {
//     $("#listsOfFruits").fadeOut()
// })

// $("#fruits").dblclick(function() {
//     $("#listsOfFruits").fadeToggle()
// })









// - delay()


// - stop()



// - animate()
$("#fruits").on("click", function(){
    $("#listsOfFruits").animate(
        {
            width: "500px",
            height: "100px",
            opacity: 0.9,
            fontSize: "3em",
            borderWidth: "10px",
        },
        2000
    )
})


