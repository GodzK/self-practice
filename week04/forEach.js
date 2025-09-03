const words = ["Mango", "Apple","mangosteen","orange", "mangoes"]

let startWithA = []

words.forEach(word => {
  if (word.toLowerCase().startsWith("a")) {
    startWithA.push(word)
  }
})

console.log(result)      
console.log(startWithA)  