// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: a function named boilingPoint. It will take a number as an argument. Use conditional to determine were in the range the the argument will fall in. use a if statement. the return will be argument plus the sentence.

const boilingPoint =(number) =>{
    if (number > 212){
     return `${number} is above boiling point`
    } else if (number === 212){
        return `${number} is at boiling point`
       } else if (number < 212){
        return `${number} is below boiling point`
       }

} 

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPoint(temperature1));
console.log(boilingPoint(temperature2));
console.log(boilingPoint(temperature3));
// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: create a function named combineAndGetLenght. It takes two arrays as arguments name them arra1 and arra2. the function will create a variable named combinedArray that stores an array and uses the .concat method to combine the two arrays passed as argument. return the lenght the new array using the .lenght method
const combineAndGetLength =(array1, array2)=> {
    let combinedArray = array1.concat(array2);
    return combinedArray.length;
  }
  
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

console.log(combineAndGetLength(padres1984WorldSeriesRuns,padres1998WorldSeriesRuns));
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: create a function named reserveseString. Passed a string as argumen. the function crates a variable name reversedString. this variable will storsed the array passed as argumnet using the strings methods to split each letter, reverse them and then join them. also return the new variable.

const reverseString=(str) => {
    let reversedString = str.split('').reverse().join('');
    return reversedString
  }

const currentCohort = "Delta 2023"
console.log(reverseString(currentCohort));
// Expected output: "3202 atleD"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: create a function named lastIndex. it will two parameters named array and value. the function will use a for loop that will start at the end of the array until the beginning of the array. going one by one. it will compare each index with the value provide. if matches the return will be its index. To be honest i did not understand the question right away until i saw the expected outcomes.
const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndex =(arr, value) =>{
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
    }}

    console.log(lastIndex(numberOfConnections,givenValue1));
    console.log(lastIndex(numberOfConnections,givenValue2));
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: create a function called largestToSmallest that takes in numbers as its parameter. used the sort method on the argument to return the expected outcome. 

const largestToSmallest = (numbers)=>{
    numbers.sort(function(a, b) {
      return b - a;
    });
  
    return numbers;
  }

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(largestToSmallest(sanDiegoSummerTemperatures));
console.log(largestToSmallest(sanDiegoWinterTemperatures));