const test = Array.of(5)
delete test
console.log("this is" ,test.length); // fill only value 5
const test2 = Array.from(test)
console.log("this is",test2.length);
//1. create array with many data types (literal)
const arr1 = ["หมู",18,true,null]
//2. print arrau size
console.log(arr1.length);
//3. print the first item
console.log(arr1[0]);
//4. print the last item
console.log(arr1[arr1.length - 1]);
//5. add two more items at the end of arrau wotj pbkect and array data types respectively
arr1.push({"firstName":"Phakaphol"})
arr1.push([1,2,3])

for (let i = 0; i < arr1.length; i++) {
   console.log(arr1[i]);
}
console.log(arr1.length, "Size before");
console.log(arr1);
arr1.shift()
console.log(arr1);
console.log(arr1.length, "Size After");


let a = "Hello"
let b = [...a]
console.log(b);// H e l l o

let c = ["kqzpa", "bcxmo", "rqjwi", "tmevg", "uqhzn", "dfrxs", "aspoi", "lqvma", "smjek", "wztre"]
let [first,second,...rest] = c
const [,,y,...z] = c
console.log(y,typeof(y));
console.log(z,typeof(z));
let two = [first,second]
console.log(two);
console.log(rest);
// Spead a string
let f = [..."Hello World"]
let value = ''
for (let [index,letter] of f.entries()) {
   if (index % 2 === 0) {
    value += letter
   }
    
}
console.log(value);

// Argument object คล้ายๆ Array

