// conditional statement 
// if statement 
//nested if statement
// if else statement 
// if else if else statement 
//switch case statement


//if statement 

// let age = 2;        
// if (age > 18) {
//     console.log("Eligible for voting")

// }


// if else statement

// let age = 2;
// if (age > 18) {
//     console.log("Eligible for voting")

// }
// else {
//     console.log("You are not eligible for voting.")
// }


// // // nested if statement 
// let username = "admins"
// let password = "admin"

// if (username == "admin") {
//     if (password == "admin") {
//         alert("You are authorised to login .")

//     }
// }
// else {
//     alert("You are not authorised user.")
// }

// if else if ... else statement 
// let percentage = prompt("Enter your percentage");    //A
let percentage = 10

if (percentage >= 90 && percentage <= 100) {
    console.log("A+")
}

else if (percentage >= 80 && percentage < 90) {
    console.log("A")


}

else if (percentage >= 70 && percentage < 80) {
    console.log("B+")


}
else if (percentage >= 60 && percentage < 70) {
    console.log("B")


}

else if (percentage >= 45 && percentage < 60) {
    console.log("C+")


}
else {
    console.log("Failed")
}



// switch case 
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// let day = 10;
// switch (day) {
//     case 1:
//         console.log("Sunday")
//         break;

//     case 2:
//         console.log("Monday")
//         break;

//     case 3:
//         console.log("Sunday")
//         break;

//     case 4:
//         console.log("Sunday")
//         break;

//     case 5:
//         console.log("Sunday")
//         break;


//     case 6:
//         console.log("Sunday")
//         break;

//     case 7:
//         console.log("Sunday")
//         break;

//     default:
//         console.log("Invalid day")
//         break;


// }


// // loops
// for loop
// while loop


// while (condition) {

// }

// do while loop  


console.log("while loop : ")
let i = 10
while (i < 5) {
    console.log("value", i);
    i++

}


console.log("do while loop : ")
let j = 9
do {
    console.log(j)
    j++
} while (j < 5)


// // for loop 
// for (initialization; condition; increment / decrement){
//     code to be executed 
// }


console.log("for loop")
for (i = 0; i < 5; i++) {
    console.log(i)
}