// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: It will log 5
// b) Verify and explain: when you push and element to an array it will added to the end of the array. and console log the amount elements in the array.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the .lenght method rerurns the amount of element in the string counting the space

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: the first "o"
// b) Verify and explain: the console log is looking for the fourth index in the string which it will be the first "o". Arrays and strings start from index count 0.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: error
// b) Verify and explain: it console logs "Ruby". but i dont understads why, i thought index was a seprate variable apart from the array of languages.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:it will console.log ["SATURDAY", "SUNDAY"]
// b) Verify and explain: it logs the erro: weekendDays.toUpperCase is not a function. I guess. As i researched i found we have loop throught each element in the array and then use the method storing the retun in a separate variable.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer: an error
// b) Verify and explain: it logs "number" i am completely lost in this one. i thought the typeof was supposed to identify the data type and the .lenght the amount of elements.
