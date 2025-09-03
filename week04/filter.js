const words = ["Mango", "Apple","mangosteen","orange", "mangoes"]
// words.reverse() for reverse
console.log(words);

// Performance of higher order function ?? compare with pure code
// 1. anonemous arrow function
const result = words.filter(words => words.toLowerCase().includes("mango"))
const startWithA = words.filter(words => words.toLowerCase().startsWith("a"))
console.log(result , startWithA)

//  2. annonemous function declaration
const startWord = words.filter(function (word){
    return word.toLowerCase().startsWith("a")
})

console.log(startWithA);

// 3. named arrow function
const checkStartA = (word)=> word.toLowerCase().startsWith("a")
const startWord2 = words.filter(checkStartA)
console.log(startWord2);


//4. named function declaration
function checkStartA2(word) {
    return word.toLowerCase().startsWith("a")
}
const startWord3 = words.filter(checkStartA2)
console.log(startWord3);