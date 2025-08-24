// Basic Programming Exercises - 50 Questions
// Each exercise includes a description, input/output examples, and its learning objective

// 1. Write a function that accepts unlimited numbers using rest parameter and returns their sum.
// Input: sumAll(1, 2, 3, 4)
// Output: 10
// Objective: Practice using rest parameter.
function sumAll(...numbers) {
    return numbers.reduce((acc,num)=>
        {
           return acc + num  
        } 
    )
}
console.log("ข้อที่ 1",sumAll(1,2,3,50));
// 2. Write a function that finds the maximum value from a set of numbers using rest parameter.
// Input: findMax(4, 10, 2, 8)
// Output: 10
// Objective: Understand how to collect multiple arguments with rest.

function findMax(...items) {
    if (arguments.length == 0) {
        return "No items"
    }
    let max = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    } return max
}

console.log("ข้อที่ 2",findMax(4, 10, 2, 8));
// 3. Create a function that takes rest parameters and returns them as an array.
// Input: collectArgs("a", "b", "c")
// Output: ["a", "b", "c"]
// Objective: Learn how rest packs arguments into an array.

function collectArgs(...items) {
    let packArr = [...items]
    return packArr
}
console.log("ข้อที่ 3",collectArgs("a", "b", "c"));

// 4. Write a function that multiplies all numbers provided as arguments.
// Input: multiplyAll(2, 3, 4)
// Output: 24
// Objective: Rest parameter with reduce().

function multiplyAll(...nums) {
    return nums.reduce((acc,nums)=>{
        return acc + nums
    })
}
console.log(multiplyAll(2,3,4));


// 5. Write a function that joins multiple strings passed as arguments into one string.
// Input: joinStrings("Hello", "World", "!")
// Output: "HelloWorld!"
// Objective: Using rest parameter with strings.

function joinStrings(...string) {
    let word = ""
    return string.reduce((word,string)=>{
        return word+string
    })
}
console.log(joinStrings("Hello", "World", "!"));


// 6. Use spread operator to copy an array without referencing the original.
// Input: const arr = [1,2,3]; const copy = [...arr];
// Output: copy = [1,2,3]
// Objective: Spread parameter for shallow copy.

//ถูกต้องรึเปล่า ??
function copy(...arr) {
    let copy = [...arr]
    return copy
}
console.log(copy([1,2,3]));

