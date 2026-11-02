// array 
//array is a data structure that allows us to store and manage multiple values under a single varibale.
// it is an ordered collection of elements stored in a single variable.


// example 

// let students = ["shristi", "shriya", "pratik"]  //index starts from 0.
// console.log(students[0])

// console.log(students.indexOf("shristi"))

// let shristiInfo = ["ktm", 2078, 40000, true]
// console.log(shristiInfo[1])


// //updating the data
// shristiInfo[0] = "hetauda"
// console.log(shristiInfo)

// //deleting
// // delete shristiInfo[0] 
// // console.log(shristiInfo)

// shristiInfo.pop()   //removes last element from an array
// console.log(shristiInfo)

// shristiInfo.shift()  //removes first element from an array
// console.log(shristiInfo)

// shristiInfo.push(true)
// console.log(shristiInfo)

// shristiInfo.unshift("CEO OF GOOGLE")
// console.log(shristiInfo)


// create an array with 4 objects.Each object represent student information including name, address, faculty, batch and number.Address must include city and ward number.Display one of the student info using index.


// let students = [
//     {
//         name: "shristi",
//         address: {
//             city: "ktm",
//             ward: 16
//         },
//         faculty: "csit",
//         batch: 2078,
//         number: 9815889098
//     },
//     {
//         name: "shristi Dhungel",
//         address: {
//             city: "ktm",
//             ward: 16
//         },
//         faculty: "csit",
//         batch: 2078,
//         number: 9815889098
//     },
//     {
//         name: "shristi",
//         address: {
//             city: "ktm",
//             ward: 16
//         },
//         faculty: "csit",
//         batch: 2078,
//         number: 9815889098
//     },
//     {
//         name: "shristi",
//         address: {
//             city: "ktm",
//             ward: 16
//         },
//         faculty: "csit",
//         batch: 2078,
//         number: 9815889098
//     },
// ]

// console.log(students[1].address.city)




// function 
//function is a reusable blocks of code that perform a specific task.

// function name(params) {

// }


// function without parameters 
// function greet() {
//     console.log("hello world")

// }

// greet()
// greet()
// greet()

// function with parameters 
// function greet(name) {
//     console.log("Hello , " + name)
// }
// greet("Shristi")
// greet("Shriya")

// function with return type 
// function add(a, b) {
//     return a + b;

// }
// console.log(add(10, 20))

// // function with default parameter 
// function greet(name = "guest") {
//     console.log("Hello , " + name)
// }
// greet("Shristi")


// create an object to represent employee info including EId,name,position and department.

//create an array with 4 objects that includes 4 employee information like above.Display the object data of index position 2 and update its position also.

// create a function named add with 3 parameters .Display their result also .


//create a function to check largest of two numbers.

function greatest(a, b) {
    if (a > b) {
        return "Largest is : " + a
    }
    else {
        return "Largest is : " + b
    }
}

let results = greatest(10, 9)
console.log(results)

// create a function for withdraw and deposit balance.Display "Insufficient balance " if amount is greater than balance.

let number = [1, 2, 3, 4, 5]
number.map((num) => {
    console.log("square : " + num * num)

})

let even = number.filter((nums) => {
    return nums % 2 == 0

})
console.log(even)

//use the concept of filter to extract the even numbers from given array.

