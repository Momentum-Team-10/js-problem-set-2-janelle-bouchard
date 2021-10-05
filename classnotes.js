// Notes from class:
// for (let i = 0; i <personalbar.length; i++) {
//     console.log("Hello")
// }
// let i = 0
// while (i < student.length) {
//     console.log(i, student[i])
// i += 1
// }

// for (let person of people) {
//     console.log("hello, " + person + "!")
// }
let students = ["sam", "val", "lola"]
students.push("Chi")
//adds to the end of the array - not a good practice because it ALTERS the original array (it mutates the data)
//DON'T MAKE CHANGES TO ARRAYS!!
let students = ["sam", "val", "lola"]
students.pop()
//takes the last value out of the array - also changes the array permanently
let students = ["sam", "val", "lola"]
students.unshift("Gigi")
//adds the value inside the parens to the beginning of the array
let students = ["sam", "val", "lola"]
students.shift()
//takes out the first value of the array (opposite of pop)
let students = ["sam", "val", "lola"]
students.indexOf("val") // => 1
//in my students array, find the index of "val", indexOf is inherent to js language

students.indexOf("val") // => 1

students.splice(1)
//removes items from the array, takes 2 arguements: the "idx"/where you want to start removing items & the number of items you want to be removed
//when you use "splice", the second argument (the second item in the parens) represents how many items in the array should be removed.

//also allows you to ADD items to the array at a specific index
//returns a NEW array
const newStudents = [...students]
//copies an array
//"..." is "spread syntax"/"rest operator" and can help to copy one array into a new array.
//Transforming an array:  create a new array, loop over the original array, for each element in the original, transform it, cop

let words = ["tape", "womp", "arm"]
let wordLengths = []

for (let word of words) {
    wordLengths.push(word.length)
}
// Creates a NEW (empty) array, transforms the words into a word count for each, and adds those to your new array
// adding ".length" to a string or to an array gives you the length of whichever var it's attached to

let scores = [91, 54, 78, 39, 81]
let passingGrades = []

for (let score of scores) {
    passingGrades.push(score >= 60)
}
// This creates a new array: passingGrades = [True, False, True, False, True]
// If the score from the first array is GREATER than OR EQUAL TO 60, then it is added to the new array of passingGrades with the value of either true or false (boolean value) because of the logical operation of comparison
//always have to initialize a new array in order to push a value to it
let students = ["sam", "val", "lola"]

students.map(student) => {
    return student.length
}

// map is a function call, and takes another function as an arguement.  This is where you will use => (arrow function) syntax
// the parameter is the singular of the array
// map CREATES A NEW ARRAY, and leaves the original array alone!
// to see it in the console students.map(student) => {return student.length}
// In arrow syntax, if there's only one parameter, you don't need to use the parens around the parameter

students.filter(student => {return student.length === 4})

// console.log(students.filter(student => {return student.length === 4}))
//says loop through my array, and check for the length of the name, then pull only the names of a specific length (4 in this case) into the new Array

let prices = [1.9, 8.98, .50, 12.95, 6.50]
prices.reduce((price, total) => total += price)
// .reduce: reduces your array down to a single value
// requires 2 arguments
// reduce is an uncommonly used function
// functions that are passed as arguments (in the case of .map, .reduce, and .filter) can remain unamed (anonymous), or they can be named with the keyword "function"

