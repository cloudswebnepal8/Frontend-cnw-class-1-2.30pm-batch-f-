// events 
// function sayHello(){
//     alert("Hello , shristi")
//     console.log("welcome to coding class .")
// }

// using dom property to perform event 
// let ele = document.getElementById("btn")
// ele.onclick = function() {
//     alert("Hello , everyone")
//     console.log("welcome to coding class .")
// }

// // using addEventListener 
// let ele = document.getElementById("btn")

// ele.addEventListener("mouseout", function () {
//     alert("Hello , everyone !!")

// })

let password = document.getElementById("pass")
password.addEventListener("input", function () {

    if (password.value.length < 8) {
        document.getElementById("message").innerText = "Password must be atleast 8 characters"

    }
    else{
        document.getElementById("message").innerText = "Password is strong"


    }
})
