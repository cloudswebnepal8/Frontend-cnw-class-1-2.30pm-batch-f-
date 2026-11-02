// let names = "ajay sir"
// names="anuja mam"
// console.log(names)

//let -we cannot redeclare the variable with same name using let but we can reassign value.


// const age = 25
// // age = 26
// console.log(age)

//const -we cannot redeclare the variable with same name using const also, we cannot reassign value.

//In modern javascript,we use const and let keyword .

// Data types
// a.primitive data types
// Number,string,boolean,undefined


// console.log(typeof age)
// console.log(typeof names)


// b.Non primitive data types 

// object 
let userInfo = {
    name: "ajay sir",
    age: 25,
    address: "kathmandu"

}
console.log(userInfo.name)

userInfo.name="ankita mam"
console.log(userInfo)

delete userInfo.address
console.log(userInfo)

userInfo.collegeName="Samriddhi college"
console.log(userInfo)